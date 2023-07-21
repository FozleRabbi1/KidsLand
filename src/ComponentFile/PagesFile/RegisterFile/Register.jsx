import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthContextProvider";

const VITE_image_upload_key = import.meta.env.VITE_image_upload_key
// console.log(VITE_image_upload_key)


const Register = () => {
    const image_hosting_url = `https://api.imgbb.com/1/upload?key=${VITE_image_upload_key}`;
    const { register, handleSubmit, watch, formState: { errors, touchedFields } } = useForm();
    
    const { createUserr , user} = useContext(AuthContext);
    console.log(user)

    const onSubmit = data => {
        const { name, email, photoUrl, password, confirmPassword } = data;

        createUserr(email, password)
            .then((data) => {
                console.log(data)
                // console.log(user)

            })

        // const formData = new FormData();
        // formData.append("image", data.image[0]);
        // fetch(image_hosting_url, {
        //     method: "POST",
        //     body: formData
        // })
        //     .then(res => res.json())
        //     .then(imageData => {
        //         console.log(imageData)
        //         if (imageData.success) {
        //             const imageUrl = imageData.data.display_url;
        //             console.log(email, password)
        //             createUse(email, password)
        //                 .then((data) => {
        //                     console.log(data)
        //                 })
        //         }
        //     })
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
                    {/* <input type="file"  {...register("image", { required: true })} className="file-input file-input-bordered w-full max-w-xs text-black" />
                    <br /> */}

                    {errors.exampleRequired && <span>This field is required</span>}

                    <input className="p-1 rounded-md border text-lg font-semibold" type="submit" />
                    <Link to={"/login"} >Login</Link>

                </form>
            </div>




        </div>
    );
};

export default Register;