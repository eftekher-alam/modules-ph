
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from 'firebase/auth';
import App from '../../firebase/firebase.init';
import { useState } from 'react';

const Login = () => {
    const auth = getAuth(App);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const [user, setUser] = useState(null);

    console.log(user);

    const handlerGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const loggedInUser = result.user;
                setUser(loggedInUser);
                console.log("user info : ", loggedInUser);
            })
            .catch(error => {
                console.log(error.message);
            });
    }

    const handlerGitHubSignIn = () => {
        signInWithPopup(auth, githubProvider)
            .then(result => {
                const loggedInUser = result.user;
                setUser(loggedInUser);
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    const handlerGoogleSignOut = () => {
        signOut(auth)
            .then(() => {
                setUser(null);
                // console.log("Log out successfully");
            })
            .catch(error => {
                console.log("Error : ", error.message);
            })
    }

    return (
        <div>
            {
                user ? <button onClick={handlerGoogleSignOut} >Log Out</button> :
                    <div>
                        <button onClick={handlerGoogleSignIn} >Login with Google</button><br />
                        <button onClick={handlerGitHubSignIn} >Login with GitHub</button>
                    </div>

            }



            {user &&
                <div>
                    <h1>User Name : {user?.displayName}</h1>
                    <h3>Email : {user?.email}</h3>
                    <img src={user?.photoURL} alt="" />
                </div>}

        </div>
    );
};

export default Login;