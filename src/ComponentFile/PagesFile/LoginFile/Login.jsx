import { useForm } from "react-hook-form";
import "./Login.css"
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthContextProvider";

const Login = () => {
    const { register, handleSubmit, watch, formState: { errors, touchedFields } } = useForm();
    const {userLogin} = useContext(AuthContext);

    const onSubmit = data => {
        const { email, password } = data;
        
        userLogin(email, password)
        .then(res => {
            console.log(res)
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
                    {errors.exampleRequired && <span>This field is required</span>}

                    <input className="p-1 rounded-md border text-lg font-semibold" type="submit" />
                    <Link to={"/register"} >register</Link>

                </form>
            </div>
        </div>
    );
};

export default Login;