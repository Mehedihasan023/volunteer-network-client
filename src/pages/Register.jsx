import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Link } from "react-router-dom";

const Register = () => {
    const { createUser, updateUserData } = useContext(AuthContext);
    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const date = form.date.value;
        const events = form.events.value;
        const registration = { name, email, password, date, events };
        console.log(registration);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                updateUserData(user, name)
                console.log(user);
            })
            .catch(error => console.error(error))

        fetch('http://localhost:5000/register-list', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(registration)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    alert('successfully')
                }
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
                            <input type="text" name='email' placeholder="email" className="input input-bordered" />
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