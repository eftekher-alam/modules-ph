import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/authProvider/AuthProvider";
import { AiFillFacebook } from "react-icons/ai";

const Register = () => {

    const { createUser, googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();

    const handlerRegister = e => {
        e.preventDefault();
        // const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        createUser(email, password)
            .then(() => {
                navigate("/")
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    const handlerGoogleSignIn = () => {
        googleSignIn()
            .then(() => {
                navigate("/")
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col gap-16 lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. <br />Quaerat fugiat br ut assumenda excepturi exercitationem quasi.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handlerRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                        <div className="form-control">
                            <div className="w-full flex justify-center">
                                <span onClick={handlerGoogleSignIn}>
                                    <AiFillFacebook className="text-4xl"></AiFillFacebook>
                                </span>
                            </div>

                        </div>
                        <div className="form-control">
                            <label className="text-center">
                                <div className="label-text-alt">
                                    {`Don't have an account? `}
                                    <Link to={"/login"} className="font-bold  link link-hover">Log In</Link>
                                </div>
                            </label>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;