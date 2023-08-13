import { Link, Outlet, useLocation } from "react-router-dom";
import Nav from "../SharedFile/NavbarFile/Nav";
import './Main.css'
// import Link from "../SharedFile/Link/Link";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useContext, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import { AuthContext } from "../AuthProvider/AuthContextProvider";
import Footer from "../SharedFile/FooterFile/Footer";
import MainPageNav from "../SharedFile/MainPageNav/MainPageNav";

const Main = () => {
    const location = useLocation();
    // const { user, logInOut } = useContext(AuthContext)

    useEffect(() => {
        AOS.init({ duration: 1500 });
    }, [])

    const showNavAndFooter = location.pathname !== '/login' && location.pathname !== '/register';

    return (
        <div style={{ backgroundColor: "rgba(50,150,250,0.1)", height: "100%" }} className="local-text ">
            {
                showNavAndFooter && <Nav></Nav>
            }
            <div className="Main-div">
                {
                    showNavAndFooter &&

                    <MainPageNav></MainPageNav>

                }
                <Outlet></Outlet>
                {
                    showNavAndFooter && <Footer></Footer>
                }
            </div>
            <ToastContainer />
        </div>
    );
};

export default Main;