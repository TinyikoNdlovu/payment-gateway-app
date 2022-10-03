// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAW-sIJFohWEMA3Lnm2b5D7re9o_NlyjBU",
  authDomain: "payment-gateway-decf5.firebaseapp.com",
  projectId: "payment-gateway-decf5",
  storageBucket: "payment-gateway-decf5.appspot.com",
  messagingSenderId: "1005960952868",
  appId: "1:1005960952868:web:f95d5af9b033a050146cb1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const authentication = getAuth(app);
export const provider = new GoogleAuthProvider();