import { useContext, useState } from "react";
import "./SingleDress.css";
import { GiSelfLove } from "react-icons/gi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsSearchHeart } from "react-icons/bs";
import { AuthContext } from "../../../AuthProvider/AuthContextProvider";
import axios from "axios";
import useFavouriteProduct from "../../../HooksFile/useFavouriteProduct";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../HooksFile/useAxiosSecure";
import useAddtoCard from "../../../HooksFile/useAddtoCard";
import { useEffect } from "react";
import useAddtoCardGetData from "../../../HooksFile/useAddtoCardGetData";

const SingleDress = ({ data, index, setProduct }) => {
    const [imageError, setImageError] = useState(false);
    const { user } = useContext(AuthContext)
    const [favouriteProducts, favaouriteRefatch] = useFavouriteProduct()
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const [axiosSecure] = useAxiosSecure();
    const [addtoCard, setAddToCard] = useState(null)
    const [response] = useAddtoCard(addtoCard);
    const [, refatch] = useAddtoCardGetData();


    if (response?.acknowledged) {
        Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'Added Your Product',
            showConfirmButton: false,
            timer: 1500,
        })
        setAddToCard(null)
        refatch()
    }


    const addToFavourive = (datas, image) => {
        setLoading(true)
        const { _id, images, ...rest } = datas
        const productData = { mainId: _id, ...rest, email: user?.email, imageUrl: image };
        if (!user) {
            Swal.fire({
                title: 'Login First',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Go to login page',
            }).then((result) => {
                setLoading(false)
                if (result.isConfirmed) {
                    navigate("/login")
                    setLoading(false)
                }
            })
            return
        }

        if (favouriteProducts.length >= 5) {
            toast.warn("You Can't Save  More Then 5 Product", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
            setLoading(false)
            return
        }
        axiosSecure.post(`/favouriteProducts?email=${user?.email}`, productData)
            .then(data => {
                if (data.data.exist) {
                    setLoading(false)
                    toast.warn(`${data.data.message}`, {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                    });
                    return
                }
                if (data.data.acknowledged) {
                    setLoading(false)
                    favaouriteRefatch()
                }
            })
    }


    const addtoCardFun = (data, image) => {
        const { _id, images, ...rest } = data
        const productData = { mainId: _id, ...rest, email: user?.email, imageUrl: image };
        setAddToCard(productData);
    }


    return (
        <div>
            <div data-aos="fade-up"
                data-aos-duration="2000" className="single-main-div">

                <div className="image-icon-div relative">
                    <div className="imgDiv">
                        {imageError ? (
                            <img className='img ' src="https://t4.ftcdn.net/jpg/02/51/95/53/360_F_251955356_FAQH0U1y1TZw3ZcdPGybwUkH90a3VAhb.jpg" alt="" />
                        ) : (
                            <img
                                className='img'
                                src={data?.images[0]}
                                alt="Image"
                                onError={() => setImageError(true)}
                            />
                        )}
                    </div>
                    <div className="icon-div ">
                        <div className="w-7/12 bg-red-600 mx-auto span flex justify-between p-2">
                            {
                                loading ? <div className="bg-red-500"> <span className="loading style loading-infinity loading-md"></span></div>
                                    :
                                    <span onClick={() => addToFavourive(data, data.images[0])} className="flex justify-center items-center text-white hover:text-sky-600 duration-700">
                                        <GiSelfLove className="text-xl " ></GiSelfLove>
                                    </span>
                            }

                            <span onClick={() => addtoCardFun(data, data.images[0])} className="flex justify-center items-center text-white hover:text-sky-600 duration-700"> <AiOutlineShoppingCart className="text-xl "></AiOutlineShoppingCart> </span>

                            <span onClick={() => setProduct(data)} onMouseUp={() => window.show_more_with_modal.showModal()} className="flex justify-center items-center text-white hover:text-sky-600 duration-700 cursor-pointer">
                                <button className="" > <BsSearchHeart className="text-xl "></BsSearchHeart></button>
                            </span>

                        </div>
                    </div>
                    <small className="small rounded-xl px-1 font-semibold text-xs absolute top-0 right-0"> {data?.upload_date} </small>
                </div>
                <div>
                    {
                        imageError ? <p className="text-center py-14">No data Found</p>
                            :
                            <div className="px-2 py-1 ">
                                <h2 className="font-semibold ">{data?.title}</h2>

                                <div className="singleDress-text-div text-sm font-medium">
                                    <div className="">
                                        <p className=" -my-1">Brand : {data?.brand}</p>
                                        <span className="flex justify-between">
                                            <p className="">Quantity : {data?.quantity}</p>
                                        </span>
                                        <span className="flex justify-between items-center">
                                            <p className="-mt-1">Price : <span className="text-lg text-red-500">{data?.price}</span> <span className="italic">$</span> </p>
                                            <small>{data.material} </small>
                                        </span>
                                    </div>
                                </div>
                            </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default SingleDress;