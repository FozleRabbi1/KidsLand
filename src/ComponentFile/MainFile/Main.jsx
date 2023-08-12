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

const Main = () => {
    const location = useLocation();
    const { user, logInOut } = useContext(AuthContext)

    useEffect(() => {
        AOS.init({ duration: 1500 });
    }, [])

    const logOutFun = () => {
        logInOut();
    }

    const showNavAndFooter = location.pathname !== '/login' && location.pathname !== '/register';

    return (
        <div style={{ backgroundColor: "rgba(50,150,250,0.1)", height: "100%" }} className="local-text ">
            {
                showNavAndFooter && <Nav></Nav>
            }
            <div className="Main-div">
                {
                    showNavAndFooter &&
                    <>
                        <div>
                            <div className="flex justify-between items-center py-2">

                                <span className="hidden md:block">
                                    <span className="text-md font-semibold">+001-111-222-333</span>  <br />
                                    <small className="text-xs -mt-1 block"> 2023 ABC company © All rights reserved.</small>
                                </span>

                                <span className="text-left md:text-center text-xl md:text-2xl font-bold">
                                    <h2> <span className="text-color">All POINTS</span> MOVERS MFR</h2>
                                    <p className="text-xs">We Take Of The Details...And Deliver Peace Of Mind</p>
                                </span>

                                <span className="text-right">
                                    <span className="text-md font-semibold flex items-center">
                                        {
                                            user ? user?.email : "user@gmail.com"
                                        }
                                        {
                                            user && <img className="w-12 h-12 rounded-full ms-2" src={user?.photoURL} alt="" />
                                        }
                                    </span>
                                    <small className="block md:hidden"> +001-111-222-333</small>
                                </span>
                            </div>
                        </div>
                        <div style={{ backgroundColor: "rgba(50,140,250,0.8)" }} className=" flex justify-center py-4 px-2">
                            <div className=" flex items-baseline   space-x-6">

                                <Link className="nav-text" to={"/"}>
                                    Home
                                </Link>

                                <Link className="nav-text" to={"/seeAll"}>
                                    Favourites
                                </Link>

                                <Link className="nav-text" to={"contactUs"}>
                                    Contact-Us
                                </Link>

                                <Link className="nav-text" to={"blog"}>
                                    Blog
                                </Link>

                                {
                                    user ?
                                        <span className="text-white font-semibold cursor-pointer" onClick={logOutFun}> LogOut</span>
                                        :
                                        <Link className="nav-text" to={"login"}>
                                            Login
                                        </Link>
                                }

                            </div>
                        </div>
                    </>
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