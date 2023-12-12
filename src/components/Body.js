import React, {useEffect} from 'react'
import Login from "./Login"
import Browse from "./Browse"
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { onAuthStateChanged } from "firebase/auth";
import {auth} from "../utilis/firebase"
import { useDispatch } from 'react-redux';
import {addUser, removeUser} from "../utilis/userSlice"






const Body = () => {
const dispatch = useDispatch();

  const approuter = createBrowserRouter([{
    path:"/",
    element:<Login />
  },
  {
    path:"/Browse",
    element:<Browse/>
  }
]);

//after sign in logic added here/authentication happened we are going to store this athentication state change

useEffect(()=>{

  onAuthStateChanged(auth, (user) => {
    
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      // const uid = user.uid;
      const {uid, email, displayName, photoURL} = user; //getting details from user passed in the function above
      dispatch(addUser({uid:uid, email:email, displayName:displayName, photoURL:photoURL }))
    } else {
      // User is signed out
      dispatch(removeUser())
      
    }
  }
  );


},[])




  return (
    <div>
      <RouterProvider router={approuter}/>
    </div>

   
  );
}

export default Body
