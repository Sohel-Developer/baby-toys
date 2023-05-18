import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import NotFound from "../Pages/NotFound/NotFound";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AllToys from "../Pages/Home/AllToys/AllToys";
import PrivateRoute from "./PrivateRouter";

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
                path: 'alltoys',
                element: <PrivateRoute> <AllToys /> </PrivateRoute>

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