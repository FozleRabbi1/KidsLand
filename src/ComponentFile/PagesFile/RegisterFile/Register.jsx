import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthContextProvider";
import axios from "axios";

const VITE_image_upload_key = import.meta.env.VITE_image_upload_key
// console.log(VITE_image_upload_key)


const Register = () => {
    const image_hosting_url = `https://api.imgbb.com/1/upload?key=${VITE_image_upload_key}`;
    const { register, handleSubmit, watch, formState: { errors, touchedFields } } = useForm();
    const { createUserr, user, updateUserProfile, loading } = useContext(AuthContext);
    const navigate = useNavigate();

    const onSubmit = data => {
        const { name, email, photoUrl, password, confirmPassword } = data;

        const formData = new FormData();
        formData.append("image", data.image[0]);

        fetch(image_hosting_url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(imageData => {
                if (imageData.success) {
                    const photoUrl = imageData.data.display_url;
                    const userInfo = { email, name, photoUrl: photoUrl };

                    createUserr(email, password)
                        .then(data => {
                            axios.post("http://localhost:5000/users", userInfo)
                                .then(data => {
                                    console.log(data.data)
                                    navigate("/")
                                })

                            updateUserProfile(name, email, photoUrl)
                                .then(() => { })
                        })

                }
            })
    }


    return (
        <div className="main-form-div bg-yellow-400">

            <div className="w-4/12">
                <form className="bg-green-400 p-4 mx-auto flex flex-col justify-center" onSubmit={handleSubmit(onSubmit)} >
                    <h2 className="py-2 text-center text-2xl font-bold"> <Link to={"/"}>Kids Land</Link> </h2>
                    <p>Register here</p>
                    <input className="p-1 px-3 rounded-md  mt-2 w-full" {...register("name", { required: true })} />
                    <br />
                    <input className="p-1 px-3 rounded-md  mt-2 w-full" {...register("email", { required: true })} />
                    <br />
                    <input className="p-1 px-3 rounded-md  mt-2 w-full" {...register("password", { required: true })} />
                    <br />
                    <input className="p-1 px-3 rounded-md  mt-2 w-full" {...register("confirmPassword", { required: true })} />

                    <br />
                    <input type="file"  {...register("image", { required: true })} className="file-input file-input-bordered w-full max-w-xs text-black" />
                    <br />

                    {errors.exampleRequired && <span>This field is required</span>}

                    {
                        loading ? <div className="border-2 border-white py-1 rounded-md">
                            <span className="loading loading-spinner loading-md p-1 block mx-auto"></span>
                        </div> :
                            <input className="p-1 rounded-md border text-lg font-semibold" type="submit" value="Register" />
                    }

                    <Link to={"/login"} >Login</Link>

                </form>
            </div>




        </div>
    );
};

export default Register;