// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDiDCw_rnn577ERLuLSIFzsSb-gTu5boRM",
  authDomain: "netflixgpt-623cb.firebaseapp.com",
  projectId: "netflixgpt-623cb",
  storageBucket: "netflixgpt-623cb.appspot.com",
  messagingSenderId: "750797404310",
  appId: "1:750797404310:web:323f068f690b3e22cc2ab7",
  measurementId: "G-1VV2XY2W09"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
