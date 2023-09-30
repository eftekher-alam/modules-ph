// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCwyIGCroY88LkctcJ5fca9b94IGX3GBeo",
    authDomain: "react-email-pass-auth-6fe7c.firebaseapp.com",
    projectId: "react-email-pass-auth-6fe7c",
    storageBucket: "react-email-pass-auth-6fe7c.appspot.com",
    messagingSenderId: "915297200625",
    appId: "1:915297200625:web:f3bcb9060e1c3652663c50"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;