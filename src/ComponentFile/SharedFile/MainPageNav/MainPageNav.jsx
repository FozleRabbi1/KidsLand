import React, { useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthContextProvider';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import useAddtoCardGetData from '../../HooksFile/useAddtoCardGetData';
import { FaUserAlt } from 'react-icons/fa';

const MainPageNav = () => {
    const { user, logInOut } = useContext(AuthContext);
    const [addToCardData] = useAddtoCardGetData();
    // const [showNav, setShowNav] = useState(false)

    const logOutFun = () => {
        logInOut();
    }

    return (
        <div>
            <>
                <div id='top' className=''>
                    <div className="flex justify-between items-center py-2">

                        <span className="hidden md:block">
                            <span className="text-md font-semibold">+001-111-222-333</span>  <br />
                            <small className="text-xs -mt-1 block"> 2023 ABC company © All rights reserved.</small>
                        </span>

                        <span className="text-left md:text-center  md:text-2xl font-bold">
                            <h2> <span className="text-color ">All POINTS</span> MOVERS MFR</h2>
                            <p className="text-xs me-2 md:me-0">We Take Of The Details...And Deliver Peace Of Mind</p>
                        </span>

                        <span className="text-right -ms-1">
                            <span className="text-sm font-semibold flex items-center">
                                {
                                    user ?
                                        <div>
                                            <span className='text-xs md:text-md'>{user?.email}</span>
                                            <small className="block md:hidden"> +001-111-222-333</small>
                                        </div>
                                        : "user@gmail.com"
                                }
                                <div className='w-10 h-10'>
                                    {
                                        user ? <img className=" rounded-full ms-1 h-10 w-10 " src={user?.photoURL} alt="" />
                                            : <div className=" rounded-full ms-1 h-10 w-10 flex justify-center items-center " alt="" >
                                                <FaUserAlt className='text-xl'></FaUserAlt>
                                            </div>
                                    }
                                </div>
                            </span>
                        </span>
                    </div>
                </div>
                <div className="nav-bg-color flex justify-center py-4 px-2">
                    <div className=" flex items-baseline  space-x-3  md:space-x-6">

                        <Link className="nav-text" to={"/"}>
                            Home
                        </Link>

                        <Link className="nav-text" to={"/seeAll"}>
                            Favourites
                        </Link>

                        <Link className="nav-text" to={"/contactUs"}>
                            Contact-Us
                        </Link>


                        <Link className="nav-text" to={"/dashboard/welcomePage"}>
                            Dashboard <sup>{addToCardData.length || 0}</sup>
                        </Link>


                        <Link className="nav-text" to={"/blog"}>
                            Blog
                        </Link>

                        {
                            user ?
                                <span className="text-white font-semibold cursor-pointer nav-text" onClick={logOutFun}> LogOut</span>
                                :
                                <Link className="nav-text" to={"/login"}>
                                    Login
                                </Link>
                        }

                    </div>
                </div>
            </>
        </div>
    );
};

export default MainPageNav;