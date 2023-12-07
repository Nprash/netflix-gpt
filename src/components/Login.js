import React from "react";
import backgroundimage from "../assets/netflix-hero-image.jpg";
import Header from "./Header";
import { useState, useRef } from "react";
import {checkValidData} from "../utilis/Validate"

const Login = () => {

const [visible, setVisible] = useState(false);
const [tick, setTick] = useState(true);
const [isSignInForm, setIsSignInForm] = useState(true);
const email = useRef(null);   
const password = useRef(null);
const name = useRef(null);   
const [errormessage, setErrormessage] = useState(null);
const [getpassword ,setGetpassword] = useState(false)


  const handleButtonClick =()=>{
    //validate the form data first
    console.log(email.current.value)
    console.log(password.current.value)

   const message = checkValidData(email.current.value, password.current.value)

    //  console.log(message)
    setErrormessage(message);
    setInterval(()=>{
      setErrormessage("")
    },3000)
   // now i can sign in or sign up

  };

  const toggleSignInForm = () => {

    setIsSignInForm(!isSignInForm);
    setGetpassword(false);
  };


return (
    <div>
        <Header />
        <div className="absolute inset-0">
          <img src={backgroundimage} className="object-cover w-full h-full brightness-[.5]"  alt="backgroundimage" />
        </div>
        <form onSubmit={(e)=> e.preventDefault()} className="absolute w-[450px]  mt-16 mx-auto left-0 right-0 bg-black bg-opacity-70 flex flex-col  p-10 px-12 border border-black box-border rounded-md shadow-md ">
          
            <h1 className={`mb-4 text-gray-100 text-2xl font-bold `}>{ isSignInForm === true ? ("Sign In"):getpassword=== true ? ("Recover your Password"):("Sign Up") }</h1>
          
          <div className="flex flex-col justify-center items-center">
            

            {
            isSignInForm === false ? (<input
              type="text"
              ref={name}
              placeholder="Full Name"
              className="w-full outline-none text-xs text-stone-200 bg-stone-700 border-b-2 border-stone-700 focus:border-b-2 focus:border-red-500 rounded-md p-3 px-4 mb-3 "
            />) : getpassword === true ? (null) :""  
            }


            <input
              type="text"
              ref={email}
              placeholder="Email or phone number"
              className="w-full outline-none text-xs text-stone-200 bg-stone-700 border-b-2 border-stone-700 focus:border-b-2 focus:border-red-500 rounded-md p-3 px-4  "
            />
            {
              getpassword === true ? (null) :(<input
                type="password"
                ref={password}
                placeholder="Password"
                className="w-full outline-none text-xs text-stone-200  bg-stone-700 border-b-2 border-stone-700 focus:border-b-2 focus:border-red-500 rounded-md p-3 px-4  mt-3 mb-8"
              />)  
            }
            
            {!errormessage != null && <span className={`absolute left-12  p-0 text-[13px] text-red-500 ${isSignInForm ? " mt-6" :"mt-28"}`}>{errormessage}</span>}

            <button className="w-full text-stone-200  text-sm bg-red-500 p-2 rounded-md  " 
            onClick={()=> handleButtonClick()}>
            {isSignInForm === true ? ("Sign In"):getpassword=== true ? ("Submit"):("Sign Up")}
            </button>

            {
            isSignInForm && 
            <div className="w-full text-gray-400 text-xs  flex justify-between items-center mt-4">
              <div className="flex justify-center items-center">
                <input
                  type="checkbox"  
                  className="w-3 h-3 mr-1 accent-stone-600 text-black"
                  id="remember"  onClick={()=>{(!tick ? setTick(true) : setTick(false))}} defaultChecked
                />
                <label htmlFor="remember" className="text-gray-100">Remember me</label>
              </div>
              <span className="text-gray-100 hover:underline " onClick={()=>{setGetpassword(true); setIsSignInForm(false)}} >Forgot password ?</span>
            </div>
            }

          </div>


          <div className="mt-14 ">
            {isSignInForm ? 
            <> 
              <p className="text-xs text-stone-400 mb-4">
                New to Netflix ?{" "}
                <span className="font-bold text-stone-300 cursor-pointer hover:underline" onClick={()=>{toggleSignInForm();setGetpassword(false)}}>Sign up now</span>
              </p>
              <div className="text-[13px] text-stone-400">
              Sign in is protected by Google re<span>CAPTCHA</span> to ensure
              you're not a bot.{" "}
              <span className={`${visible ? "hidden":"text-blue-500 underline cursor-pointer"}`} onClick={()=> setVisible(true)}>Learn more</span> 
              {visible && <p className="text-[13px] mt-2">  The information collected by Google reCAPTCHA is subject to the Google <span className="text-blue-500 ">Privacy Policy</span> and <span className="text-blue-500 ">Terms of Service</span>, and is used for providing, maintaining, and improving the reCAPTCHA service and for general security purposes (it is not used for personalised advertising by Google).</p>}
              </div>  
            </>: 
            <p className="text-xs text-stone-400 mb-2">
              Already have an account ?{" "}
              <span className="font-bold text-stone-300 cursor-pointer hover:underline" onClick={()=>toggleSignInForm()}>Sign in</span>
            </p>}
            
          </div>
        </form>
    </div>
  
  );
};

export default Login;
