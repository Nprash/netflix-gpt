import React from 'react'
import logo from "../assets/netflix-logo.png"
// import usericon from "../assets/usericon.jpeg"
import { signOut } from "firebase/auth";
import { auth } from '../utilis/firebase'
import { useNavigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';



const Header = () => {
const navigate = useNavigate();
const islocation = useLocation();
const user = useSelector((store)=>store.user); // in this user we have photourl sent from firebase

const  handleSignout = ()=>{

  signOut(auth).then(() => {
    // Sign-out successful.
    navigate("/")
    // dispatch(removeUser()) already removed at body page
  }).catch((error) => {
    // An error happened.
    navigate("/error")
  });
  
  }

  return (
    <div className='absolute w-full  z-30 flex justify-between items-start'>
      <img src={logo} className='relative w-32  top-3 left-20  ' alt="netflix-logo"/>
      {user && <div className={` ${islocation.pathname.includes("/Browse") ? "flex justify-center p-2 mr-4":"hidden"}`}>
        <img src={user?.photoURL} alt="usericon" className='h-8 w-8 rounded-lg mr-3' />
      <button onClick={()=>handleSignout()} className='text-red-500 font-semibold'>sign out</button>
      </div>}
    
    </div>
  )
}

export default Header
