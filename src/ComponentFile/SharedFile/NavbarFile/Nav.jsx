import { Transition } from "@headlessui/react";
import { useContext, useEffect, useState } from "react";
import Activelink from "../ActiveLink/Activelink";
import './Nav.css'
import useFavouriteProduct from "../../HooksFile/useFavouriteProduct";
import { GiSelfLove } from "react-icons/gi";
import { RiDeleteBin2Fill } from "react-icons/ri";
import axios from "axios";
import { AuthContext } from "../../AuthProvider/AuthContextProvider";
import { Link } from "react-router-dom";
import useAddtoCardGetData from "../../HooksFile/useAddtoCardGetData";

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrollingDown, setIsScrollingDown] = useState(false);
    const [prevScrollY, setPrevScrollY] = useState(0);
    // const [loading, setLoading] = useState(false)
    const { user, logInOut } = useContext(AuthContext);
    const [favouriteProducts, favaouriteRefatch] = useFavouriteProduct();
    const [addToCardData] = useAddtoCardGetData();
    const [loadingId, setLoadingId] = useState("")

    const logOutFun = () => {
        logInOut();
    }

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > prevScrollY) {
                setIsScrollingDown(true);
            } else {
                setIsScrollingDown(false);
            }

            setPrevScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollY]);

    const deleteFunction = (id) => {
        setLoadingId(id)
        // setLoading(true)
        axios.delete(`https://kids-land-server-two.vercel.app/favouriteProducts/${id}`)
            .then(data => {
                favaouriteRefatch()
                // setLoading(false)
            })
        // setLoading(false)
    }


    return (
        <div className="nav-style bg-color">

            <div className={`${isScrollingDown ? "down" : "up"} fixed w-full z-50 `} >
                <nav className="px-10">
                    <div className=" ">
                        <div className="flex items-center justify-between h-16">
                            <div className="flex w-full justify-between items-center">
                                <div className="flex-shrink-0">
                                    <img className="w-12 h-12 rounded-2xl" src="https://i.ibb.co/3fGFGP9/istockphoto-1029895828-612x612.jpg" alt="" />
                                </div>
                                <div className="hidden md:block  ">
                                    <div className="ml-10 flex  items-center space-x-6">

                                        <Activelink to={"/"}>
                                            Home
                                        </Activelink>

                                        <Activelink to={"/seeAll"}>
                                            Favourites
                                        </Activelink>

                                        <Activelink to={"/contactUs"}>
                                            ContactUs
                                        </Activelink>
                                        {/* dashboard/selectedProduct/selectedProduct */}
                                        {/* <Activelink className="flex" to={"/dashboard/selectedProduct/selectedProduct"}> */}
                                        <Activelink className="flex" to={"/dashboard/welcomePage"}>
                                            Dashboard <sup>{addToCardData.length || 0}</sup>
                                        </Activelink>

                                        <Activelink to={"/blog"}>
                                            Blogs
                                        </Activelink>



                                        <div className="dropdown dropdown-hover">
                                            <label tabIndex={0} className="flex items-center m-1">
                                                <GiSelfLove className="text-2xl text-red-700" ></GiSelfLove>
                                                <small className="-mb-4 -ms-1 text-white ">{favouriteProducts?.length || 0}</small>
                                            </label>

                                            <ul tabIndex={0} className="dropdown-content z-[1] -ms-10 menu p-2 shadow bg-base-100 rounded-box w-44">
                                                {
                                                    favouriteProducts.length === 0 ? <p className="text-center">data not available</p> :
                                                        <>
                                                            <Link className="border w-6/12 text-center rounded mx-auto mb-1 hover:bg-gray-700 hover:text-white duration-500" to={"/seeAll"}>See All</Link>
                                                            {
                                                                favouriteProducts?.map(products =>
                                                                    <span key={products._id} className="  m-1 flex justify-between items-center ">

                                                                        <img className="w-16 h-16 rounded-full bg-green-400 p-1" src={products.imageUrl} alt="" />

                                                                        {/* <div className='flex'>
                                                                            <span className="loading loading-spinner text-info"></span>
                                                                        </div> */}

                                                                        {
                                                                            loadingId === products._id ? 
                                                                            <div className='flex'>
                                                                                <span className="loading loading-spinner text-info"></span>
                                                                            </div> :
                                                                                <RiDeleteBin2Fill onClick={() => deleteFunction(products._id)} className="text-2xl cursor-pointer text-red-400 hover:text-red-700 duration-500"></RiDeleteBin2Fill>
                                                                        }
                                                                    </span>
                                                                )
                                                            }
                                                        </>
                                                }
                                            </ul>
                                        </div>
                                        {
                                            user ?
                                                <span className="text-white font-semibold cursor-pointer hover:text-red-500 duration-500 " onClick={logOutFun}> LogOut</span>
                                                :
                                                <Activelink className="" to={"/login"}>
                                                    Login
                                                </Activelink>
                                        }


                                    </div>
                                </div>
                            </div>
                            <div className="-mr-2 flex md:hidden">
                                <button
                                    onClick={() => setIsOpen(!isOpen)}
                                    type="button"
                                    className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                                    aria-controls="mobile-menu"
                                    aria-expanded="false"
                                >
                                    <span className="sr-only">Open main menu</span>
                                    {!isOpen ? (
                                        <svg
                                            className="block h-6 w-6"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M4 6h16M4 12h16M4 18h16"
                                            />
                                        </svg>
                                    ) : (
                                        <svg
                                            className="block h-6 w-6"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M6 18L18 6M6 6l12 12"
                                            />
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>

                    <Transition
                        show={isOpen}
                        enter="transition ease-out duration-100 transform"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="transition ease-in duration-75 transform"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        {(ref) => (
                            <div className="md:hidden" id="mobile-menu">
                                <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                                    <a
                                        href="#"
                                        className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
                                    >
                                        Dashboard
                                    </a>

                                    <a
                                        href="#"
                                        className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                    >
                                        Team
                                    </a>

                                    <a
                                        href="#"
                                        className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                    >
                                        Projects
                                    </a>

                                    <a
                                        href="#"
                                        className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                    >
                                        Calendar
                                    </a>

                                    <a
                                        href="#"
                                        className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                    >
                                        Reports
                                    </a>
                                </div>
                            </div>
                        )}
                    </Transition>
                </nav>

            </div>
        </div>
    );
};

export default Nav;