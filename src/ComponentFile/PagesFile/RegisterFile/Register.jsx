import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthContextProvider";
import axios from "axios";
import { useState } from "react";
import '../../../ComponentFile/LoginRegister.css'
import SocialLogin from "../../SharedFile/SocialLogin/SocialLogin";

const VITE_image_upload_key = import.meta.env.VITE_image_upload_key
// console.log(VITE_image_upload_key)
const Register = () => {
    const image_hosting_url = `https://api.imgbb.com/1/upload?key=${VITE_image_upload_key}`;
    const { register, handleSubmit, reset, watch, formState: { errors, touchedFields } } = useForm();
    const { createUserr, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(" ");


    const onSubmit = data => {
        const { name, email, password } = data;

        const formData = new FormData();
        formData.append("image", data.image[0]);

        fetch(image_hosting_url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(imageData => {
                setIsLoading(true)
                if (imageData.success) {
                    const photoUrl = imageData.data.display_url;
                    const userInfo = { email, name, photoUrl: photoUrl };
                    createUserr(email, password)
                        .then(() => {
                            axios.post("https://kids-land-server-two.vercel.app/users", userInfo)
                                .then(() => {
                                    setIsLoading(false)
                                    reset();
                                    navigate("/")
                                })
                            updateUserProfile(name, email, photoUrl)
                                .then(() => { })
                        })
                        .catch(err => {
                            setIsLoading(false)
                            setError(err.message)
                        })
                }
            })
    }

    const [lines, setLines] = useState([]);
    const createLine = () => {
        const sizeW = Math.random() * 22;
        const duration = Math.random() * 3;
        const newLine = {
            width: `12px`,
            left: `${Math.random() * window.innerWidth}px`,
            animationDuration: `${2 + duration}s`,
        };
        setLines((prevLines) => [...prevLines, newLine]);
    };
    useEffect(() => {
        const intervalId = setInterval(createLine, 200);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="main-form-div font-serif relative overflow-hidden  ">
            <div className="animation-div overflow-hidden">
                {lines.map((line, index) => (
                    <div
                        key={index}
                        className="circle"
                        style={{
                            width: line.width,
                            left: line.left,
                            animationDuration: line.animationDuration,
                        }}
                    ></div>
                ))}
            </div>

            <div className="w-11/12 px-2 md:w-7/12 rounded-sm  register-form-div md:px-6 md:py-10 h-4/5 lg:h-3/5 flex flex-col items-center justify-center">
                <h2 className=" text-center mb-1"> Create A New Accout For <Link className=" text-xl md:text-2xl font-bold text-sky-400 underline" to={"/"}>Kids Land!</Link> </h2>
                <small className="-mt-3 mb-5 text-center block ">Come join the kids Land Community! Lets setup your Account. Already have One?  <Link to={"/login"} className="text-xl italic text-sky-500 font-bold" >Sign in here...</Link>  </small>

                <div className="flex flex-col-reverse lg:flex-row justify-center items-center w-full">

                    <div className=" w-full lg:w-4/12  ">
                        <SocialLogin></SocialLogin>
                    </div>

                    <form className=" mx-auto w-full flex flex-col justify-center flex-1 lg:ps-6  lg:border-l-2 border-indigo-500" onSubmit={handleSubmit(onSubmit)} >
                        {
                            error && <p className="text-red-500 text-center">{error}</p>
                        }
                        <input onMouseDown={() => setError(" ")} className="p-1 px-3  rounded-md  mt-2 w-full" placeholder="Full Name" {...register("name", { required: true })} />
                        <input onMouseDown={() => setError(" ")} className="p-1 px-3  rounded-md  mt-2 w-full" placeholder="Email" {...register("email", { required: true })} />
                        <input onMouseDown={() => setError(" ")} className="p-1 px-3  rounded-md  mt-2 w-full" placeholder="Password" {...register("password", { required: true })} />
                        <input type="file"  {...register("image", { required: true })} className="my-2 border-none rounded-md w-8/12 md:w-8/12 lg:w-6/12 max-w-xs text-sky-200" />
                        {errors.exampleRequired && <span>This field is required</span>}
                        {
                            isLoading ? <div className="border-2 border-white py-1 mt-2 rounded-md">
                                <span className="loading loading-spinner loading-md p-1 block mx-auto"></span>
                            </div> :
                                <input className="p-1 mt-2 rounded-md border text-lg font-semibold cursor-pointer hover:bg-green-300 hover: duration-500" type="submit" value="Register" />
                        }
                    </form>

                </div>
            </div>


        </div>
    );
};

export default Register;