import { useContext } from "react";
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

    console.log(error)

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


    return (
        <div className="main-form-div font-serif ">
            <div className="w-7/12 rounded-sm -mt-20 register-form-div px-6 py-10">
                <h2 className=" text-center mb-1"> Create A New Accout For <Link className=" text-2xl font-bold text-sky-400 underline" to={"/"}>Kids Land!</Link> </h2>
                <small className="-mt-3 mb-5 text-center block ">Come join the kids Land Community! Lets setup your Account. Already have One?  <Link to={"/login"} className="text-xl italic text-sky-500 font-bold" >Sign in here...</Link>  </small>
                <div className="flex">
                    <div className="w-4/12  ">
                        <SocialLogin></SocialLogin>
                    </div>
                    <form className=" mx-auto flex flex-col justify-center flex-1 ps-6  border-l-2 border-indigo-500" onSubmit={handleSubmit(onSubmit)} >
                        {
                            error && <p className="text-red-500 text-center">{error}</p>
                        }
                        <input onMouseDown={() => setError(" ")} className="p-1 px-3 text-black rounded-md  mt-2 w-full" placeholder="Full Name" {...register("name", { required: true })} />
                        <input onMouseDown={() => setError(" ")} className="p-1 px-3 text-black rounded-md  mt-2 w-full" placeholder="Email" {...register("email", { required: true })} />
                        <input onMouseDown={() => setError(" ")} className="p-1 px-3 text-black rounded-md  mt-2 w-full" placeholder="Password" {...register("password", { required: true })} />
                        <input type="file"  {...register("image", { required: true })} className="my-2 border-none rounded-md w-6/12 max-w-xs text-sky-200" />
                        {errors.exampleRequired && <span>This field is required</span>}
                        {/* <div className="mt-2 w-full"> */}
                            {
                                isLoading ? <div className="border-2 border-white py-1 mt-2 rounded-md">
                                    <span className="loading loading-spinner loading-md p-1 block mx-auto"></span>
                                </div> :
                                    <input className="p-1 mt-2 rounded-md border text-lg font-semibold cursor-pointer hover:bg-green-300 hover:text-black duration-500" type="submit" value="Register" />
                            }
                        {/* </div> */}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;