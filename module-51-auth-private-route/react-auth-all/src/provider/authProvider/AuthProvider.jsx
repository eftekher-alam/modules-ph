import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types"
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true); //Always true only when observe done then false
    const provider = new GoogleAuthProvider();

    useEffect(() => {
        // It will check/observe an user logged in or not at every refresh
        const unSubscribe = onAuthStateChanged(auth, user => {
            // here, all the code will execute at every refresh automatically  
            // console.log("Inside auth state : ", user);
            setUser(user);
            setLoading(false);
        });
        return () => { unSubscribe() }
    }, []);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleSignIn = () => {
        return signInWithPopup(auth, provider);
    }


    const loggOut = () => {
        setLoading(true); 
        signOut(auth)
            .then(() => {
                console.log("Successfully Logged out");
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    const authInfo = { user, createUser, signIn, loggOut, loading, googleSignIn }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node
}

export default AuthProvider;