import { createBrowserRouter, } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home";
import Error from "../pages/Error";
import Admin from "../pages/Admin";
import RegisterList from "../pages/RegisterList";
import AddEvents from "../pages/AddEvents";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Events from "../pages/Events";
import PrivateRoute from "./PrivateRoute";


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
                element: <PrivateRoute><Admin></Admin></PrivateRoute>,
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
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
              path:'/events',
                element: <PrivateRoute><Events></Events></PrivateRoute>,
            },
          
            {
                path: '*',
                element: <Error></Error>
            }
        ]
    },
]);

export default router;