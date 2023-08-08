import { useForm } from "react-hook-form";
import "./Login.css"
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthContextProvider";

const Login = () => {
    const { register, handleSubmit, formState: { errors, touchedFields } } = useForm();
    const { userLogin, loading } = useContext(AuthContext);
    const [isLoading, setInLoading] = useState(false)
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const navigate = useNavigate();
    const [error, setError] = useState(" ");

    const onSubmit = data => {
        setInLoading(true)
        const { email, password } = data;
        userLogin(email, password)
            .then(res => {
                setInLoading(false)
                const user = res.user;
                if (user) {
                    navigate(from, { replace: true })
                }
            })
            .catch(err => {
                setError(err.message)
                setInLoading(false)
            })
    }


    return (
        <div className="main-form-div bg-yellow-400">

            <div className="w-4/12">

                <form className="bg-green-400 p-4 mx-auto flex flex-col justify-center" onSubmit={handleSubmit(onSubmit)} >
                    <h2 className="py-2 text-center text-2xl font-bold"> <Link to={"/"}>Kids Land</Link> </h2>
                    <p>login here</p>
                    <input className="p-1 px-3 rounded-md  mt-2 w-full" {...register("email", { required: true })} />
                    <br />
                    <input className="p-1 px-3 rounded-md  mt-2 w-full" {...register("password", { required: true })} />
                    <br />
                    {/* {errors.exampleRequired && <span>This field is required</span>}

                    {errors.password && <small className="text-red-500">{errors.password.message}</small>}
                    {touchedFields.email && errors.email && (<p>{errors.email.message}</p>)} */}

                    {
                        isLoading ? <div className="border-2 border-white py-1 rounded-md">
                            <span className="loading loading-spinner loading-md p-1 block mx-auto"></span>
                        </div> :
                            <input className="p-1 rounded-md border text-lg font-semibold" type="submit" value="Login" />
                    }

                    {
                        error && <p className="text-red-500">{error}</p>
                    }

                    <Link to={"/register"} >register</Link>

                </form>

            </div>
        </div>
    );
};

export default Login;