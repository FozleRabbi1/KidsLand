import { useContext, useState } from "react";
import "./SingleDress.css";
import { GiSelfLove } from "react-icons/gi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsSearchHeart } from "react-icons/bs";
import { AuthContext } from "../../../AuthProvider/AuthContextProvider";
import axios from "axios";
import useFavouriteProduct from "../../../HooksFile/useFavouriteProduct";
import { toast } from "react-toastify";

const SingleDress = ({ data, index, setProduct }) => {
    const [imageError, setImageError] = useState(false);
    const { user } = useContext(AuthContext)
    const [favouriteProducts, favaouriteRefatch] = useFavouriteProduct()
    const [loading, setLoading] = useState(false)

    const addToFavourive = (datas, image) => {
        setLoading(true)
        const { _id, images, ...rest } = datas
        const productData = { mainId: _id, ...rest, email: user?.email, imageUrl: image };

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
        axios.post("http://localhost:5000/favouriteProducts", productData)
            .then(data => {
                if (data.data.acknowledged) {
                    setLoading(false)
                    favaouriteRefatch()
                }
            })
    }

    return (
        <div>
            <div className="single-main-div">

                <div className="image-icon-div">
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
                                        <GiSelfLove
                                            className="text-xl " ></GiSelfLove>
                                    </span>
                            }

                            <span className="flex justify-center items-center text-white hover:text-sky-600 duration-700"> <AiOutlineShoppingCart className="text-xl "></AiOutlineShoppingCart> </span>

                            <span onClick={() => setProduct(data)} onMouseUp={() => window.show_more_with_modal.showModal()} className="flex justify-center items-center text-white hover:text-sky-600 duration-700 cursor-pointer">
                                <button className="" > <BsSearchHeart className="text-xl "></BsSearchHeart></button>
                            </span>

                        </div>
                    </div>
                </div>
                <div>
                    {
                        imageError ? <p className="text-center">No data Found</p> :
                            <div className="px-2 py-1"> 
                                <h2 className=" font-bold">{data?.title}</h2>

                                <div className="">
                                    <div className="text-sm font-semibold">
                                        <p className="">Brand : {data?.brand}</p>
                                        <p className="">Quantity : {data?.quantity}</p>
                                        <span className="flex justify-between items-center">
                                            <p className="">Price : <span className="text-lg text-red-500">{data?.price}</span> $/=</p>
                                            <small className="bg-green-300 rounded-xl px-1 font-bold"> {data?.upload_date} </small>
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