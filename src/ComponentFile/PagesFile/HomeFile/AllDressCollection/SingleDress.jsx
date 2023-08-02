import { useContext, useState } from "react";
import "./SingleDress.css";
import { GiSelfLove } from "react-icons/gi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsSearchHeart } from "react-icons/bs";
import { AuthContext } from "../../../AuthProvider/AuthContextProvider";
import useFavouriteHook from "../../../HooksFile/useFavouriteHook";
import axios from "axios";
import useFavouriteProduct from "../../../HooksFile/useFavouriteProduct";

const SingleDress = ({ data, index }) => {
    const [imageError, setImageError] = useState(false);
    const { user } = useContext(AuthContext)
    const [, favaouriteRefatch] = useFavouriteProduct()
    const [loading, setLoading] = useState(false)

    console.log(loading)

    const addToFavourive = (datas, image) => {
        setLoading(true)
        const { _id, images, ...rest } = datas
        const productData = { mainId: _id, ...rest, email: user?.email, imageUrl: image };
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
            <div className="">
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
                            <span className="flex justify-center items-center text-white hover:text-sky-600 duration-700">
                                {
                                    loading ? "L" :
                                        <GiSelfLove
                                            onClick={() => addToFavourive(data, data.images[0])} className="text-xl " ></GiSelfLove>
                                }

                            </span>
                            <span className="flex justify-center items-center text-white hover:text-sky-600 duration-700"> <AiOutlineShoppingCart className="text-xl "></AiOutlineShoppingCart> </span>
                            <span className="flex justify-center items-center text-white hover:text-sky-600 duration-700"> <BsSearchHeart className="text-xl "></BsSearchHeart> </span>
                        </div>
                    </div>

                </div>


                <div>
                    {
                        imageError ? <p className="text-center">No data Found</p> :
                            <>
                                <h2 className="text-center font-bold">{data?.title}</h2>
                                <p className="text-center">quantity : {data?.quantity}</p>
                                <p className="text-center">price : {data?.price} $</p>
                            </>
                    }
                </div>






            </div>
        </div>
    );
};

export default SingleDress;