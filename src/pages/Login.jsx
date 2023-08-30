import { useContext, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import Swal from 'sweetalert2'

const Login = () => {
    const { signIn, googleSignIn } = useContext(AuthContext);
    const [error, setError] = useState(' ');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';
    const handleLogin = event => {
        event.preventDefault();
        //clear previous error message
        setError(' ');
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    icon: 'success',
                    title: 'Login successfully...',
                })
                navigate(from, { replace: true })
            })
            .catch(error => {
                setError(error.message)
                console.error(error);
            })

    }
    const handleGoogleLogin = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    icon: 'success',
                    title: 'Login successfully...',
                })
                navigate(from, { replace: true })
            })
            .catch(error => console.log(error))
    }
    return (
        <div className="flex justify-center mt-16 ">
            <div className="border bg-white w-96 py-12">
                <h2 className="text-2xl font-bold text-center">Login With</h2>
                {/* sign in with email and pass */}
                <form onSubmit={handleLogin}>
                    <div className=" md:w-96 w-72  bg-base-100 px-5 py-4">
                        <div className="">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                            </div>
                            {/* show error message */}
                            <p className="text-red-500">{error}</p>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </div>
                    </div>
                </form>
                {/* Google signin  */}
                <div onClick={handleGoogleLogin} className="flex justify-center items-center">
                    <ul className=" border rounded-full  mt-4 h-16 flex justify-center items-center hover:bg-base-200" >
                        <li>
                            <div className="flex justify-around w-80">
                                <button className="btn btn-circle btn-outline mr-10 text-2xl">
                                    G
                                </button>
                                <span className=" text-center flex justify-center items-center"> Login With Google</span>
                                <span className="mr-10"></span>
                            </div>
                        </li>
                    </ul>
                </div>
                <p className="text-center mt-5">Don{`'`}t have an account?<Link to='/register' className="text-blue-600 font-bold">Create an account</Link> </p>
            </div>

        </div>
    );
};

export default Login;