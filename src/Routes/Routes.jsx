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
import UpdateEvents from "../pages/UpdateEvents";
import UpEventsInfo from "../pages/UpEventsInfo";


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
                    },
                    {
                        path:'/admin/update-events',
                        element:<UpdateEvents></UpdateEvents>
                    },
                    {
                        path:'/admin/up-events-info/:id',
                        element:<UpEventsInfo></UpEventsInfo>,
                        loader: ({params}) => fetch(`http://localhost:5000/events/${params.id}`)
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