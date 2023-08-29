import { Outlet } from "react-router-dom";
import NavBar from "../pages/Shared/NavBar";


const Main = () => {
    return (
        <div className="bg-[#F8FAFC] h-screen overflow-y-scroll">
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;