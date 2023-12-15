import React , {useEffect}from 'react'
import logo from "../assets/netflix-logo.png"
import { auth } from '../utilis/firebase'
import { useNavigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {signOut, onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux';
import {addUser, removeUser} from "../utilis/userSlice"



const Header = () => {
const navigate = useNavigate();
const islocation = useLocation();
const user = useSelector((store)=>store.user); // in this user we have photourl sent from firebase
const dispatch = useDispatch();
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
//thi suseeffect will works like a event listener it works with header component when header render onauthstate will render it attached to header
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
        navigate("/")
      }
    });
    //when component will unmount below will called
    return ()=> unsubscribe(); //when there is no header this will retun unsubscribe, which means it removes the unsubscribe
    //when header is there then onauthStateChange will work, if no header no onauthstatechange
  },[])

  return (
    <div className='absolute w-full z-30 flex justify-between items-center box-border'>
      <img src={logo} className='relative w-32  top-2 left-20  ' alt="netflix-logo"/>
      
      {user && 
      <div className={` ${islocation.pathname.includes("/Browse") ? "flex justify-center p-2 pt-4":"hidden"}`}>
        <img src={user?.photoURL} alt="usericon" className='h-8 w-8 rounded-lg mr-3' />
      <button onClick={()=>handleSignout()} className='text-red-500 font-semibold'>sign out</button>
      </div>}
    
    </div>
  )
}

export default Header
