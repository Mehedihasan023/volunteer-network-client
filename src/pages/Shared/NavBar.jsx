import { Link } from "react-router-dom";
import logo from '../../assets/logos/Group 1329.png'

const NavBar = () => {

    const navItems = <>
        <li><Link to='/'>Home</Link> </li>
        <li><Link to='/events'>Events</Link></li>
        <li><Link to='/login'>Login</Link></li>
        <li><Link to='/register'>Register</Link></li>
    </>


    return (
        <div className="">
            <div className="navbar bg-[#F8FAFC]">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navItems}
                        </ul>
                    </div>
                    <Link className="btn btn-ghost normal-case text-xl">
                        <img className="w-24" src={logo} alt="" />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to='/admin/' className="btn btn-neutral">
                        Admin 
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NavBar;