import React, { useEffect } from 'react';
import MainPageNav from '../SharedFile/MainPageNav/MainPageNav';
import { Link, Outlet, useLocation } from 'react-router-dom';
import Nav from '../SharedFile/NavbarFile/Nav';
import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthContextProvider';
import { ToastContainer } from 'react-toastify';
import useFavouriteProduct from '../HooksFile/useFavouriteProduct';
import useAddtoCardGetData from '../HooksFile/useAddtoCardGetData';
import useAdmin from '../HooksFile/DashBoardHooks/useAdmin';
import useManager from '../HooksFile/DashBoardHooks/useManager';

const DashBoard = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    const [favouriteProducts] = useFavouriteProduct();
    const [addToCardData] = useAddtoCardGetData();
    const { user } = useContext(AuthContext)
    const location = useLocation();
    const showNavAndFooter = location.pathname !== '/login' && location.pathname !== '/register';
    const [isAdmin, adminLoading] = useAdmin();
    const [isManager, managerLoading] = useManager()
    console.log("admin", isAdmin?.admin)
    console.log("manager", isManager?.manager)

    // const admin = isAdmin?.admin;
    const admin = true;
    const manager = isManager?.manager;

    const allRoutes = <>
        <li className='' ><Link className=' w-full block text-center font-semibold text-black mb-3 p-2 rounded-full hover:text-red-500 duration-500' to={"/"}> Home </Link></li>
        <li className='' ><Link to={"/contactUs"} className=' w-full block text-center font-semibold text-black mb-3 p-2 rounded-full hover:text-red-500 duration-500'>Contact-Us</Link></li>
        <li className='' ><Link to={"/blog"} className=' w-full block text-center font-semibold text-black mb-3 p-2 rounded-full hover:text-red-500 duration-500'>Blogs</Link></li>
    </>


    return (
        <div >

            {
                showNavAndFooter && <Nav></Nav>
            }

            <div className="Main-div ">

                <div style={{ backgroundColor: "rgb(50,150,250)" }} className='px-4 text-white'>
                    <div className="flex justify-between items-center py-2">

                        <span className="hidden md:block">
                            <span className="text-md font-semibold">+001-111-222-333</span>  <br />
                            <small className="text-xs -mt-1 block"> 2023 ABC company © All rights reserved.</small>
                        </span>

                        <span className="text-left md:text-center text-xl md:text-2xl font-bold">
                            <h2> <span className="text-red-400">All POINTS</span> MOVERS MFR</h2>
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


                <div className="drawer lg:drawer-open">
                    {/* <div className="drawer drawer-open"> */}
                    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content flex flex-col pt-3">
                        <Outlet></Outlet>
                        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                    </div>
                    <div className="drawer-side px-8 bg-gray-200">
                        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

                        {
                            admin ?

                                <ul className="m-0 p-0">
                                    <span className='flex items-center flex-col-reverse my-3'>
                                        <small className='font-semibold'>{user?.email}</small>
                                        <div className="chat chat-start">
                                            <div className="chat-image avatar">
                                                <div className="w-12 rounded-full">
                                                    <img src={user?.photoURL} />
                                                </div>
                                            </div>
                                            <div className="chat-bubble text-sky-500 font-bold">Admin</div>
                                        </div>
                                    </span>
                                    <li className='' ><Link className=' w-full block text-center font-semibold text-black mb-3 p-2 rounded-full hover:text-red-500 duration-500' to={"/dashboard/allUsers"}> All Users
                                        {/* <sup className='text-red-500 font-bold'>{favouriteProducts?.length || 0}</sup> */}
                                    </Link></li>
                                    <li className='' ><Link className=' w-full block text-center font-semibold text-black mb-3 p-2 rounded-full hover:text-red-500 duration-500' to={"/dashboard/"}>Managers
                                        {/* <sup className='text-red-500 font-bold'>{addToCardData?.length || 0}</sup>  */}
                                    </Link></li>

                                    <div className="divider"></div>
                                    {
                                        allRoutes
                                    }

                                </ul>

                                :
                                manager ?

                                    <ul className="">
                                        <span className='flex items-center flex-col-reverse my-3'>
                                            <small className='font-semibold'>{user?.email}</small>
                                            <div className="chat chat-start ">
                                                <div className="chat-image avatar">
                                                    <div className="w-12 rounded-full">
                                                        <img src={user?.photoURL} />
                                                    </div>
                                                </div>
                                                <div className="chat-bubble text-sky-500 text-center font-bold"> Manager </div>
                                            </div>
                                        </span>

                                        <li><Link>Manager</Link></li>
                                        <li><Link>Manager</Link></li>

                                        <div className="divider"></div>
                                        {
                                            allRoutes
                                        }
                                    </ul>

                                    :
                                    <ul className="m-0 p-0">
                                        <span className='flex items-center flex-col-reverse my-3'>
                                            <small className='font-semibold'>{user?.email}</small>
                                            <div className="chat chat-start">
                                                <div className="chat-image avatar">
                                                    <div className="w-12 rounded-full">
                                                        <img src={user?.photoURL} />
                                                    </div>
                                                </div>
                                                <div className="chat-bubble text-sky-500 font-bold">User</div>
                                            </div>
                                        </span>
                                        <li className='' ><Link className=' w-full block text-center font-semibold text-black mb-3 p-2 rounded-full hover:text-red-500 duration-500' to={"/dashboard/seeLikedProduct"}> All Liked Product <sup className='text-red-500 font-bold'>{favouriteProducts?.length || 0}</sup> </Link></li>
                                        <li className='' ><Link className=' w-full block text-center font-semibold text-black mb-3 p-2 rounded-full hover:text-red-500 duration-500' to={"/dashboard/selectedProduct"}>Selected Product <sup className='text-red-500 font-bold'>{addToCardData?.length || 0}</sup> </Link></li>

                                        <div className="divider"></div>
                                        {
                                            allRoutes
                                        }

                                    </ul>

                        }
                    </div>
                </div>
            </div>

            <ToastContainer />
        </div>
    );
};

export default DashBoard;