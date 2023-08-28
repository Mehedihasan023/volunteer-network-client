import {createBrowserRouter,} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home";
import Error from "../pages/Error";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
               path:'*',
               element:<Error></Error>
            }
        ]
    },
]);

export default router;