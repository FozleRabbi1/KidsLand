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
                const userInfo = { name: res.user.displayName, email: res.user.email }
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
        <div>
            <h2 className="">why be old fashioned?</h2>
            <h3>just sign in with : </h3>

            <div >

                <span className="flex bg-blue-300 w-7/12 rounded-sm duration-500 cursor-pointer hover:bg-blue-400  mt-2 items-center py-1 justify-center">
                    <AiFillFacebook className="text-4xl border-r-2 text-blue-600 "></AiFillFacebook>
                    <span className=" flex-1">
                        <p className="text-center text-black "> FaceBook</p>
                    </span>
                </span>

                <span onClick={googleLoginFun} className="flex my-2 bg-red-300 w-7/12 rounded-sm duration-500 cursor-pointer hover:bg-red-400  items-center py-1 justify-center">
                    <FcGoogle className="text-4xl border-r-2"></FcGoogle>
                    <span className=" flex-1">
                        <p className="text-center text-black "> Google</p>
                    </span>
                </span>

                <span className="flex bg-gray-300 w-7/12 rounded-sm duration-500 cursor-pointer hover:bg-gray-400   items-center py-1 justify-center">
                    <AiFillGithub className="text-4xl border-r-2 text-black"></AiFillGithub>
                    <span className=" flex-1">
                        <p className="text-center text-black "> GitHub</p>
                    </span>
                </span>

            </div>
        </div>
    );
};

export default SocialLogin;