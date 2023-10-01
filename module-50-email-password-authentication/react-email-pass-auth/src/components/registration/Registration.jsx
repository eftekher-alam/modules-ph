import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase/firebase.config";
import { useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { Link } from "react-router-dom";

const Registration = () => {
    const [regError, setRegError] = useState(null);
    const [showPass, setShowPass] = useState(false);

    const handlerRegistration = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        // console.log("Given Info..", email, password);
        setRegError(null);

        if (!e.target.acceptTerms.checked) {
            setRegError("Please accept Terms and Conditions.");
            return;
        }

        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.log(error.message)
                setRegError(error.message)
            });
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card flex-shrink-0 max-w-sm shadow-2xl bg-base-100 w-96">
                    <div className="card-body">
                        <h1 className="text-3xl font-bold text-center pb-4">Registration</h1>
                        {
                            regError && <span className="text-red-600">{regError}</span>
                        }
                        <form onSubmit={handlerRegistration}>
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
                                </div>
                                <div className="absolute bottom-4 right-4">
                                    <span onClick={() => setShowPass(!showPass)} >
                                        {
                                            showPass ? <AiFillEye></AiFillEye> :
                                                <AiFillEyeInvisible></AiFillEyeInvisible>
                                        }
                                    </span>
                                </div>
                            </div>
                            <div className="form-control mt-4">
                                <div className="label">
                                    <label className="label-text">
                                        <input type="checkbox" name="acceptTerms" /> Accept out Terms and Conditions
                                    </label>
                                </div>
                            </div>
                            <div className="form-control mt-4">
                                <button className="btn  btn-primary">Login</button>
                            </div>
                            <div className="form-control">
                                <label className="label flex justify-center">
                                    <div>
                                        <span className="label-text"> {`Already have an account? `} </span>
                                        <Link to={"/Login"} className="label-text-alt font-bold link link-hover"> Log In </Link>
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

export default Registration;

