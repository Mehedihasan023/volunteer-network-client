
const Register = () => {
    return (
        <div className="flex justify-center mt-16">

          <form>
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
                    </div>
                </div>
          </form>
           




        </div>
    );
};

export default Register;