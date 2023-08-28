import { createBrowserRouter, } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home";
import Error from "../pages/Error";
import Admin from "../pages/Admin";
import RegisterList from "../pages/RegisterList";
import AddEvents from "../pages/AddEvents";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/admin',
                element: <Admin></Admin>,
                children: [
                    {
                      path:'/admin/',
                      element:<RegisterList></RegisterList>
                    },
                    {
                        path: '/admin/add-events',
                        element: <AddEvents></AddEvents>
                    }
                ]
            },
            {
                path: '*',
                element: <Error></Error>
            }
        ]
    },
]);

export default router;