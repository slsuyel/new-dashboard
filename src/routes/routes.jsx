import { createBrowserRouter } from "react-router-dom";
import WithOutnavbar from "../layouts/WithOutnavbar";
import Signin from "../pages/auth/Signin";
import Signup from "../pages/auth/Signup";
import WithNavbar from "../layouts/WithNavbar";
import Home from "../pages/home";
import About from "../pages/about";
import Booking from "../hotels/Booking/Booking";
import AllHotels from "../hotels/AllHotels/AllHotels";
import HotelDetails from "../hotels/AllHotels/HotelDetails";
import Employees from "../hotels/Employees/Employees";
import Transaction from "../hotels/Transaction/Transaction";
import AdminRoute from "./AdminRoute";
import Blogs from "../pages/blogs";
import Users from "../pages/users";
import "../App.css";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <WithOutnavbar />,
        errorElement: <h1>404 - Page not found</h1>,
        children: [
            {
                path: "/",
                element: <Signin />,
            },
            {
                path: "/signin",
                element: <Signin />,
            },
            {
                path: "/signup",
                element: <Signup />,
            },

        ],
    },
    {
        path: 'dashboard',
        element: <AdminRoute><WithNavbar /></AdminRoute>,
        children: [
            {
                path: '',
                element: <Home />
            },
            {
                path: 'about',
                element: <About />
            },
            {
                path: 'booking',
                element: <Booking />
            },
            {
                path: 'hotels',
                element: <AllHotels />
            },
            {
                path: 'hotel/:id',
                element: <HotelDetails />
            },
            {
                path: 'employees',
                element: <Employees />
            },
            {
                path: 'transaction',
                element: <Transaction />
            },
            {
                path: 'blogs',
                element: <Blogs />
            },
            {
                path: 'users',
                element: <Users />
            },
          

        ]
    }

]);