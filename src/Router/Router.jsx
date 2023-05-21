import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import NotFound from "../Pages/NotFound/NotFound";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AllToys from "../Pages/AllToys/AllToys";
import PrivateRoute from "./PrivateRouter";
import AddToy from "../Pages/AddToy/AddToy";
import Details from "../Pages/Home/Shop/Details";
import MyToys from "../Pages/MyToys/MyToys";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/add',
                element: <AddToy />
            },
            {
                path: 'alltoys',
                element: <PrivateRoute> <AllToys /> </PrivateRoute>

            },
            {
                path: 'mytoys',
                element: <PrivateRoute>  <MyToys /></PrivateRoute>

            },
            {
                path: 'details/:id',
                element: <PrivateRoute><Details /></PrivateRoute>,
                loader: ({ params }) => fetch(`https://baby-toy-server.vercel.app/toy/${params.id}`)


            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            }
        ]
    },
    {
        path: '*',
        element: <NotFound />
    }
]);