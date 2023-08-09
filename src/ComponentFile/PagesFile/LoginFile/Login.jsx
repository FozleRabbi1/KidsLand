import { useForm } from "react-hook-form";
import "./Login.css"
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthContextProvider";
import SocialLogin from "../../SharedFile/SocialLogin/SocialLogin";

const Login = () => {
    const { register, handleSubmit, reset, formState: { errors, touchedFields } } = useForm();
    const { userLogin, loading } = useContext(AuthContext);
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(" ");

    const onSubmit = data => {
        setIsLoading(true)
        const { email, password } = data;
        userLogin(email, password)
            .then(res => {
                setIsLoading(false)
                const user = res.user;
                if (user) {
                    navigate(from, { replace: true })
                }
                reset();
            })
            .catch(err => {
                setError(err.message)
                setIsLoading(false)
            })
    }


    return (

        <div className="main-form-div font-serif ">
            <div className="w-7/12 rounded-sm   -mt-20 register-form-div px-6 py-10  ">
                <h2 className=" text-center"> Login Here & Go To <Link className=" text-2xl font-bold text-sky-400" to={"/"}>Kids Land!</Link> </h2>
                <small className="-mt-3 mb-5 text-center block ">Come join the kids Land Community! If You Are New? Got To  <Link to={"/register"} className="text-xl italic text-color font-bold" >Sign Up Here...</Link>  </small>

                <div className="flex">
                    <div className="w-4/12  ">
                        <SocialLogin></SocialLogin>
                    </div>
                    <form className=" mx-auto flex flex-col justify-center flex-1 ps-6  border-l-2 border-indigo-500" onSubmit={handleSubmit(onSubmit)} >
                        {
                            error && <p className="text-red-500 text-center">{error}</p>
                        }
                        <input onMouseDown={() => setError(" ")} className="p-1 px-3 text-black rounded-md  mt-2 w-full" placeholder="Email" {...register("email", { required: true })} />
                        <input onMouseDown={() => setError(" ")} className="p-1 px-3 text-black rounded-md  my-2 w-full" placeholder="Password" {...register("password", { required: true })} />
                        {errors.exampleRequired && <span>This field is required</span>}
                        {
                            isLoading ? <div className="border-2 border-white py-1 rounded-md">
                                <span className="loading loading-spinner loading-md p-1 block mx-auto"></span>
                            </div> :
                                <input className="p-1 rounded-md border text-lg font-semibold cursor-pointer hover:bg-green-300 hover:text-black duration-500" type="submit" value="Login" />
                        }
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;