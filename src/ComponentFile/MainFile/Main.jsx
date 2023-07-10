import { Link, Outlet } from "react-router-dom";
import Nav from "../SharedFile/NavbarFile/Nav";
import './Main.css'
// import Link from "../SharedFile/Link/Link";

const Main = () => {

    return (
        <div style={{ backgroundColor: "rgba(50,150,250,0.1)" }} className="local-text">

            <Nav></Nav>
            <div className="Main-div">
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
                            <span className="text-md font-semibold">
                                user9790@gmail.com
                            </span>
                            <small className="block md:hidden"> +001-111-222-333</small>
                        </span>

                    </div>
                </div>

                <div style={{ backgroundColor: "rgba(50,140,250,0.8)" }} className=" flex justify-center py-4 px-2">
                    {/* <div>
                        <span>
                            user text , copy right
                        </span>
                        <span>
                            email
                        </span>
                    </div> */}
                    <div className=" flex items-baseline   space-x-6">

                        <Link className="nav-text" to={"/"}>
                            Home
                        </Link>


                        <Link className="nav-text" to={"blog"}>
                            Blog
                        </Link>

                        <Link className="nav-text" to={"login"}>
                            Login
                        </Link>
                        <Link className="nav-text" to={"login"}>
                            Login
                        </Link>





                    </div>
                </div>
                <Outlet></Outlet>
            </div>

        </div>
    );
};

export default Main;