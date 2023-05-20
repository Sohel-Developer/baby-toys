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
                path: 'details/:id',
                element: <Details />,
                loader: ({ params }) => fetch(`http://localhost:5000/toy/${params.id}`)


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