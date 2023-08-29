import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";


const Login = () => {
    const { googleSignIn } = useContext(AuthContext);
    const handleLogin =()=>{
      googleSignIn()
      .then(result=>{
        const user = result.user;
        console.log(user);
      })
      .catch(error=> console.log(error))
    }

    return (
        <div className="flex justify-center mt-16 ">
            <div onClick={handleLogin} className="border bg-white w-96 py-12">
                <h2 className="text-3xl font-bold text-center">Login With</h2>
                <div className="flex justify-center items-center">
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
                <p className="text-center mt-5">Don{`'`}t have a account?<Link to='/register' className="text-blue-600 font-bold">Create an account</Link> </p>
           </div>

        </div>
    );
};

export default Login;