import { createBrowserRouter } from "react-router-dom";
import Main from "./MainFile/Main";
import Home from "./PagesFile/HomeFile/Home/Home";
import Login from "./PagesFile/LoginFile/Login";
import Blog from "./PagesFile/BlogFile/Blog";
import Register from "./PagesFile/RegisterFile/Register";
import 'react-loading-skeleton/dist/skeleton.css'
import SeeAllLikedProduct from "./SharedFile/SeeAllLikedProduct/SeeAllLikedProduct";
import SpacialCategoriesSingle from "./PagesFile/HomeFile/SpacialCategoriesSection/SpacialCategoriesRoute/SpacialCategoriesSingle";
import PrivateRoute from "./PagesFile/PrivateRoute/PrivateRoute";
import ContactUs from "./PagesFile/ContactUsFile/ContactUs";
import DashBoard from "./DashBoardFile/DashBoard";
import AllLikedProduct from "./DashBoardFile/DashBoardAllPages/UserPages/AllLikedProduct/AllLikedProduct";
import SelectedProduct from "./DashBoardFile/DashBoardAllPages/UserPages/selectedProduct/SelectedProduct";
import AllUsers from "./DashBoardFile/DashBoardAllPages/CEO/AllUsers/AllUsers";
import DashWelcome from "./DashBoardFile/DashBoardAllPages/DashWelcome/DashWelcome";
import SpecialCollectionAll from "./PagesFile/SpecialCollectionAllFile/SpecialCollectionAll";

// https://kids-land-server-two.vercel.app/

export const router = createBrowserRouter([
    {
        path: "/", element: <Main></Main>,
        children: [
            { path: "/", element: <Home></Home> },
            { path: "blog", element: <Blog></Blog> },
            { path: "login", element: <Login></Login> },
            { path: "register", element: <Register></Register> },
            { path: "seeAll", element: <SeeAllLikedProduct></SeeAllLikedProduct> },
            { path: "specialCollectionAll", element: <SpecialCollectionAll></SpecialCollectionAll> },
            {
                path: "spacialDetails/:id", element:
                    <SpacialCategoriesSingle></SpacialCategoriesSingle>
            },
            {
                path: "contactUs", element:
                    <PrivateRoute>
                        <ContactUs></ContactUs>
                    </PrivateRoute>
            }
        ],
    },
    {
        path: 'dashboard', element:
            <PrivateRoute>
                <DashBoard></DashBoard>
            </PrivateRoute>,
        children: [
            { path: "welcomePage", element: <DashWelcome></DashWelcome> },
            { path: "seeLikedProduct", element: <AllLikedProduct></AllLikedProduct> },
            {path : "selectedProduct", element : <SelectedProduct></SelectedProduct> },
            {path : "allUsers", element : <AllUsers></AllUsers> },
        ]
    }
])
