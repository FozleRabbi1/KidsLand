import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { AiFillFacebook, AiFillGithub } from "react-icons/ai";
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthContextProvider';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const { googleLogin } = useContext(AuthContext);
    const navigate = useNavigate()
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const googleLoginFun = () => {

        googleLogin()
            .then(res => {
                console.log(res.user)
                const userInfo = { name: res.user.displayName, email: res.user.email, photoUrl: res.user.photoURL }
                if (res.user) {
                    axios.post("https://kids-land-server-two.vercel.app/users", userInfo)
                        .then(data => {
                            // setIsLoading(false)
                        })
                    navigate(from, { replace: true })
                }
            })

    }



    return (
        <div className=''>
            <h2 className="text-center lg:text-left">why be old fashioned?</h2>
            <h3 className='text-center lg:text-left -mt-2 lg:mt-0'>just sign in with : </h3>

            <div className='flex items-center justify-between lg:items-start -mt-5 lg:mt-0 lg:flex-col ' >

                <button   className="cursor-not-allowed flex bg-blue-300 w-full lg:w-7/12 px-1 rounded-sm duration-500  hover:bg-blue-400  lg:mt-2 items-center lg:py-1 justify-center">
                    <AiFillFacebook className="text-4xl border-r-2 text-blue-600 "></AiFillFacebook>
                    <span className=" flex-1">
                        <p className="text-center text-black "> FaceBook</p>
                    </span>
                </button>

                <button onClick={googleLoginFun} className="flex mx-2 lg:mx-0 lg:my-2 bg-red-300 w-full lg:w-7/12 px-1 rounded-sm duration-500 cursor-pointer hover:bg-red-400  items-center lg:py-1 justify-center">
                    <FcGoogle className="text-4xl border-r-2"></FcGoogle>
                    <span className=" flex-1">
                        <p className="text-center text-black "> Google</p>
                    </span>
                </button>

                <button className="cursor-not-allowed flex bg-gray-300 w-full lg:w-7/12 px-1 rounded-sm duration-500 hover:bg-gray-400   items-center lg:py-1 justify-center">
                    <AiFillGithub className="text-4xl border-r-2 text-black"></AiFillGithub>
                    <span className=" flex-1">
                        <p className="text-center text-black "> GitHub</p>
                    </span>
                </button>

            </div>
        </div>
    );
};

export default SocialLogin;