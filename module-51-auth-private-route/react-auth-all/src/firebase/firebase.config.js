// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDjFy_GmwcgPEUnDcavsFEfd3bw9Ati16E",
    authDomain: "react-auth-all-117ad.firebaseapp.com",
    projectId: "react-auth-all-117ad",
    storageBucket: "react-auth-all-117ad.appspot.com",
    messagingSenderId: "466037106651",
    appId: "1:466037106651:web:478639c0ef7f11b472a9fe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;