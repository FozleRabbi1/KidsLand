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

        <div className="main-form-div font-serif relative overflow-hidden ">
            <div className="animation-div ">
                {lines.map((line, index) => (
                    <div
                        key={index}
                        className="circle"
                        style={{
                            width: line.width,
                            left: line.left,
                            animationDuration: line.animationDuration,
                        }}
                    > </div>
                ))}
            </div>


            <div className="w-11/12 lg:w-7/12 rounded-sm   register-form-div px-6 py-10  ">
                <h2 className=" text-center mb-1"> Login Here & Go To <Link className=" text-xl md:text-2xl font-bold text-sky-400 underline" to={"/"}>Kids Land!</Link> </h2>
                <small className="-mt-3 mb-5 text-center block ">Come join the kids Land Community! If You Are New? Got To  <Link to={"/register"} className="text-xl italic text-sky-500 font-bold" >Sign Up Here...</Link>  </small>

                <div className="flex flex-col-reverse lg:flex-row justify-center items-center">
                    <div className="lg:w-4/12  ">
                        <SocialLogin></SocialLogin>
                    </div>
                    <form className=" w-full mx-auto flex flex-col justify-center flex-1 lg:ps-6  lg:border-l-2 border-indigo-500" onSubmit={handleSubmit(onSubmit)} >
                        {
                            error && <p className="text-red-500 text-center">{error}</p>
                        }
                        <input onMouseDown={() => setError(" ")} className="p-1 px-3  rounded-md  mt-2 w-full" placeholder="Email" {...register("email", { required: true })} />
                        <input onMouseDown={() => setError(" ")} className="p-1 px-3  rounded-md  my-2 w-full" placeholder="Password" {...register("password", { required: true })} />
                        {errors.exampleRequired && <span>This field is required</span>}
                        {
                            isLoading ? <div className="border-2 mt-2 border-white py-1 rounded-md">
                                <span className="loading loading-spinner loading-md p-2 block mx-auto"></span>
                            </div> :
                                <input className="p-1 mt-2 rounded-md border text-lg font-semibold cursor-pointer hover:bg-green-300 hover: duration-500" type="submit" value="Login" />
                        }
                    </form>
                </div>
            </div>


        </div>
    );
};

export default Login;