import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types"
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../../firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    useEffect(() => {
        // It will check/observe an user logged in or not at every refresh
        const unSubscribe = onAuthStateChanged(auth, user => {
            // here, all the code will execute at every refresh automatically  
            console.log("Inside auth state : ", user);
            setUser(user);
        });
        return () => { unSubscribe() }
    }, []);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }


    const loggOut = () => {
        signOut(auth)
            .then(() => {
                console.log("Successfully Logged out");
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    const authInfo = { user, createUser, signIn, loggOut }
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