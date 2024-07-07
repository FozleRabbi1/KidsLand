import { Link, Outlet, useLocation } from "react-router-dom";
import Nav from "../SharedFile/NavbarFile/Nav";
import './Main.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import Footer from "../SharedFile/FooterFile/Footer";
import MainPageNav from "../SharedFile/MainPageNav/MainPageNav";
import Lottie from "lottie-react";
import Loading from "../AnimationJson/loadinDot.json"

const Main = () => {
    const [loading, setLoading] = useState(false);
    const [scrollValue, setScrollValue] = useState(0)

    const location = useLocation();
    useEffect(() => {
        AOS.init({ duration: 1500 });
    }, [])

    useEffect(() => {

        const updateScrollValue = () => {
            const newValue = window.scrollY;
            setScrollValue(newValue);
        };
        window.addEventListener('scroll', updateScrollValue);
        return () => {
            window.removeEventListener('scroll', updateScrollValue);
        };

    }, [])



    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 3000);
    }, [])

    const showNavAndFooter = location.pathname !== '/login' && location.pathname !== '/register';

    return (
        // <div style={{ backgroundColor: "rgba(50,150,250,0.1)", height: "100%" }} className="local-text dark:bg-white">
        <div className="local-text bg-blue-50 h-full dark:bg-blue-50">


            {loading ? <div className="w-full h-screen flex items-center justify-center ">

                <Lottie className="h-36" animationData={Loading}></Lottie>

            </div> :

                <div className="main-section">

                    <a href="#top" className={`up-style upDown-style ${scrollValue >= 300 ? "addStylee" : "removeStylee"}`}>
                        <div className=""> up </div>
                    </a>

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

                </div>
            }


            <ToastContainer />
        </div>
    );
};

export default Main;