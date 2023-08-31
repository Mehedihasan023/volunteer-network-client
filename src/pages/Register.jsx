import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Link, useLocation, useNavigate, } from "react-router-dom";
import Swal from 'sweetalert2'
const Register = () => {
    const { createUser, updateUserData } = useContext(AuthContext);
    const [error, setError] = useState(' ');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';
    const handleRegister = event => {
        event.preventDefault();
        setError(' ');
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const date = form.date.value;
        const events = form.events.value;
        const registration = { name, email, password, date, events };

        createUser(email, password)
            .then(result => {
                const user = result.user;
                updateUserData(user, name)
                // add user to database
                fetch('https://volunteer-network-server-tawny.vercel.app/register-list', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(registration)
                })
                    .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        Swal.fire({
                            icon: 'success',
                            title: 'Registered successfully...',
                        })
                    }
                })
              
                navigate(from, { replace: true })
            })
            .catch(error => {
                setError(error.message);
                console.log(error);
                return;
            })
  
    }



    return (
        <div className="flex justify-center mt-16">

            <form onSubmit={handleRegister}>
                <div className=" md:w-96 w-72  bg-base-100 px-5 py-4">
                    <h2 className="ml-1 mt-2 text-xl font-bold">Register as a Volunteer</h2>
                    <div className="">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Full Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" className="input input-bordered" />
                        </div>
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
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Date</span>
                            </label>
                            <input type="Date" name='date' placeholder="date" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Events</span>
                            </label>
                            <input type="text" name='events' placeholder="Events or Volunteer rules" className="input input-bordered" />
                        </div>
                        {/* show error message */}
                        <p className="text-red-500">{error}</p>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Registration</button>
                        </div>
                        <p className="text-center mt-2">Already have an account?<Link to='/login' className="text-blue-600 font-bold">Login</Link> </p>
                    </div>
                </div>
            </form>





        </div>
    );
};

export default Register;