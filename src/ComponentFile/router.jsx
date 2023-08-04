import { createBrowserRouter } from "react-router-dom";
import Main from "./MainFile/Main";
import Home from "./PagesFile/HomeFile/Home/Home";
import Login from "./PagesFile/LoginFile/Login";
import Blog from "./PagesFile/BlogFile/Blog";
import Register from "./PagesFile/RegisterFile/Register";
import 'react-loading-skeleton/dist/skeleton.css'
import SeeAllLikedProduct from "./SharedFile/SeeAllLikedProduct/SeeAllLikedProduct";

export const router = createBrowserRouter([
    {
        path: "/", element: <Main></Main>,
        children: [
            { path: "/", element: <Home></Home> },
            { path: "blog", element: <Blog></Blog> },
            { path: "login", element: <Login></Login> },
            { path: "register", element: <Register></Register> },
            { path: "seeAll", element: <SeeAllLikedProduct></SeeAllLikedProduct> }
        ],
    },
])
