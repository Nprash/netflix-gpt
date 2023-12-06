import React from "react";
import backgroundimage from "../assets/netflix-hero-image.jpg";
import Header from "./Header";
import { useState } from "react";

const Login = () => {

const [visible, setVisible] = useState(false);
const [tick, setTick] = useState(true);
const [isSignInForm, setIsSignInForm] = useState(true);
  
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };


return (
    <div>
        <Header />
        <div className="absolute inset-0">
          <img src={backgroundimage} className="object-cover w-full h-full brightness-[.5]"  alt="backgroundimage" />
        </div>
        <form className="absolute w-[450px] h-[705px] mt-16 mx-auto left-0 right-0 bg-black bg-opacity-70 flex flex-col  p-10 px-12 border border-black box-border rounded-md shadow-md ">
            <h1 className="mb-4 text-gray-100 text-2xl font-bold ">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
          <div className="flex flex-col justify-center items-center">
            {!isSignInForm && <input
              type="text"
              className="w-full outline-none text-xs text-stone-200 bg-stone-700 border-b-2 border-stone-700 focus:border-b-2 focus:border-red-500 rounded-md p-3 px-4 mb-3 "
              placeholder="Full Name"
            /> }
            <input
              type="text"
              className="w-full outline-none text-xs text-stone-200 bg-stone-700 border-b-2 border-stone-700 focus:border-b-2 focus:border-red-500 rounded-md p-3 px-4 mb-3 "
              placeholder="Email or phone number"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full outline-none text-xs text-stone-200  bg-stone-700 border-b-2 border-stone-700 focus:border-b-2 focus:border-red-500 rounded-md p-3 px-4 mb-8 "
            />
            <button className="w-full text-stone-200 text-sm bg-red-500 p-2 rounded-md mb-4">
            {isSignInForm ? "Sign In" : "Sign Up"}
            </button>
            <div className="w-full text-gray-400 text-xs  flex justify-between items-center">
              <div className="flex justify-center items-center">
                <input
                  type="checkbox"  
                  className="w-3 h-3 mr-1 accent-stone-600 text-black"
                  id="remember"  onClick={()=>{setTick(false)}} checked
                />
                <label htmlFor="remember" className="text-gray-100">Remember me</label>
              </div>
              <span className="text-gray-100">Forgot password ?</span>
            </div>
          </div>
          <div className="mt-14 ">
            {isSignInForm ? 
            <> 
              <p className="text-xs text-stone-400 mb-4">
                New to Netflix ?{" "}
                <span className="font-bold text-stone-300 cursor-pointer hover:underline" onClick={()=>toggleSignInForm()}>Sign up now</span>
              </p>
              <p className="text-[13px] text-stone-400">
              Sign in is protected by Google re<span>CAPTCHA</span> to ensure
              you're not a bot.{" "}
              <span className={`${visible ? "hidden":"text-blue-500 underline"}`} onClick={()=> setVisible(true)}>Learn more</span> 
              {visible && <p className="text-[13px] mt-2">  The information collected by Google reCAPTCHA is subject to the Google <span className="text-blue-500 ">Privacy Policy</span> and <span className="text-blue-500 ">Terms of Service</span>, and is used for providing, maintaining, and improving the reCAPTCHA service and for general security purposes (it is not used for personalised advertising by Google).</p>}
              </p>  
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
