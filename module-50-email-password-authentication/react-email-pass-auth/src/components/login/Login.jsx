import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";
import auth from "../firebase/firebase.config";

const Login = () => {
    const [showPass, setShowPass] = useState(false);
    const [errorMsg, setErrorMsg] = useState(null);

    const handlerLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
        setErrorMsg(null);
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.log(error.message);
                setErrorMsg(error.message);
            })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card flex-shrink-0 max-w-sm shadow-2xl bg-base-100 w-96">
                    <div className="card-body">
                        <h1 className="text-3xl font-bold text-center pb-4">Login Now!</h1>
                        {
                            errorMsg && <span className="text-red-600">{errorMsg}</span>
                        }
                        <form onSubmit={handlerLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input  input-bordered" />
                            </div>
                            <div className="relative">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type={showPass ? "text" : "password"} name="password" placeholder="password" className="input  input-bordered" />
                                    <label className="label">
                                        <Link className="label-text-alt link link-hover"> Forget password? </Link>
                                    </label>
                                </div>
                                <div className="absolute bottom-12 right-4">
                                    <span onClick={() => setShowPass(!showPass)} >
                                        {
                                            showPass ? <AiFillEye></AiFillEye> :
                                                <AiFillEyeInvisible></AiFillEyeInvisible>
                                        }
                                    </span>
                                </div>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn  btn-primary">Login</button>
                            </div>
                            <div className="form-control">
                                <label className="label flex justify-center">
                                    <div>
                                        <span className="label-text"> {`Don't have an account?`} </span>
                                        <Link to={"/Registration"} className="label-text-alt font-bold link link-hover"> Registration </Link>
                                    </div>
                                </label>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;