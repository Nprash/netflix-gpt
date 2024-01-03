import React , {useEffect}from 'react'
import logo from "../assets/netflix-logo.png"
import { auth } from '../utilis/firebase'
import { useNavigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {signOut, onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux';
import {addUser, removeUser} from "../utilis/userSlice"
import { showGptSearch, toggleGptSearchView } from '../utilis/gptSlice';
import { Options } from 'tsparticles-engine';
import {SUPPORTD_LANGUAGES} from '../utilis/constants';
import {changeLanguage} from "../utilis/configSlice"



const Header = () => {

const navigate = useNavigate();
const islocation = useLocation();
const dispatch = useDispatch();
const user = useSelector((store)=>store.user); // in this user we have photourl sent from firebase
// const movies = useSelector(store=>store.movies)
const showGptSearch = useSelector(store => store.gpt.showGptSearch)


const  handleSignout = ()=>{

  signOut(auth).then(() => {
    // Sign-out successful.
    // navigate("/") to protect routing we use this at onauthstate change
    // dispatch(removeUser()) already removed at body page
  }).catch((error) => {
    // An error happened.
    navigate("/error")
  });
  }

//header is inside login(login is in routerprovider) so navigate will work,otherwise navigate wont work outside of router.
//after sign in logic added here/authentication happened we are going to store this athentication state change
//thi useeffect will works like a event listener it works with header component when header render onauthstate will render it attached to header
  useEffect(()=>{

  const unsubscribe =  onAuthStateChanged(auth, (user) => {
      
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        // const uid = user.uid;
        const {uid, email, displayName, photoURL} = user; //getting details from user passed in the function above
        dispatch(addUser({uid:uid, email:email, displayName:displayName, photoURL:photoURL })
        )
        navigate("/Browse") // to protect routing purpose when auth changed then navigate is good
      } else {
        // User is signed out
        dispatch(removeUser())
        // dispatch(removeMovies())
        navigate("/")
      }
    });
    //when component will unmount below will called
    return ()=> unsubscribe(); //when there is no header this will retun unsubscribe, which means it removes the unsubscribe
    //when header is there then onauthStateChange will work, if no header no onauthstatechange
  },[])

  const handleGptSearchClick = () =>{
    //toggle gptsearch
    dispatch(toggleGptSearchView())
  }

  const handleLanguageChange = (e) =>{
    console.log(e.target.value)
    dispatch(changeLanguage(e.target.value))
  }



  return (
    <div className='absolute w-full z-30 flex justify-between items-center box-border'>
      <img src={logo} className='relative w-32  top-2 left-20  ' alt="netflix-logo"/>
      
      {
      user && 
      <div className={` ${islocation.pathname.includes("/Browse") ? "flex justify-center items-center  p-2 pt-4":"hidden"}`}>
        <div className='cursor-pointer'>
          {showGptSearch && <select onChange={handleLanguageChange} className=' p-2 cursor-pointer bg-gradient-to-r from-red-400 to-pink-600 text-transparent bg-clip-text rounded-lg focus:outline-none outline-none'>
            {SUPPORTD_LANGUAGES.map((lang) => <option className='bg-gray-900 bg-opacity-50 cursor-pointer text-white rounded-lg focus:outline-none outline-none p-0 m-0' key={lang.identifier} value={lang.identifier} >{lang.name}
            </option>)
            }
            
          </select>}
        </div>
        <button onClick={handleGptSearchClick} className='flex p-2 bg-gradient-to-r from-red-400 to-pink-600 text-transparent bg-clip-text  mr-3 font-semibold'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-red-400">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
          <span>{showGptSearch ? "Home page" : "GPT Search"}</span>
        </button>
        <img src={user?.photoURL} alt="usericon" className='h-8 w-8 rounded-lg mr-3' />
        <button onClick={()=>handleSignout()} className=' p-2 bg-gradient-to-r from-red-400 to-pink-600 text-transparent bg-clip-text rounded-lg mr-3 font-semibold'>sign out</button>
      </div>
      }
    
    </div>
  )
}

export default Header
