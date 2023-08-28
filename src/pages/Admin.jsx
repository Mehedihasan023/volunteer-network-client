import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
const Admin = () => {
    return (
        <div className="md:grid md:grid-cols-5 md:mx-5">
            <div className="md:col-span-1">
                <ul className="steps steps-vertical">
                    <ul className="steps steps-vertical">
                        <NavLink
                            to="/admin/"
                            className={({ isActive }) =>
                                isActive ? "step-primary step" : "step"
                            }
                        >
                            <li data-content="✓" className="">Volunteer register list</li>
                        </NavLink>
                        <NavLink
                            to="/admin/add-events"
                            className={({ isActive }) =>
                                isActive ? "step-primary step" : "step"
                            }
                        >
                            <li data-content="✓" className="">Add event</li>
                        </NavLink>
                    </ul>
               
                </ul>
            </div>
            <div className="md:col-span-4 " >
             <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Admin;