import { useEffect, useState } from "react";
import './ShowMoreWithModal.css'
import ReactImageMagnify from 'react-image-magnify';
import { toast } from "react-toastify";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useContext } from "react";
import { AuthContext } from "../../../../AuthProvider/AuthContextProvider";
import Swal from "sweetalert2";
import useFavouriteProduct from "../../../../HooksFile/useFavouriteProduct";
import axios from "axios";
import { GiSelfLove } from "react-icons/gi";
import { Link, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../../../HooksFile/useAxiosSecure";
import useAddtoCard from "../../../../HooksFile/useAddtoCard";
import useAddtoCardGetData from "../../../../HooksFile/useAddtoCardGetData";

const ShowMoreWithModal = ({ product, setProduct }) => {
    const [imageIndex, setImageIndex] = useState(0);
    // const [size, setSize] = useState("");
    const [counetr, setCounter] = useState(1);
    const [totalPrice, setTotalPrice] = useState(0);
    const [warningText, setWarningText] = useState("");
    const { user } = useContext(AuthContext);
    const [favouriteProducts, favaouriteRefatch] = useFavouriteProduct();
    const [loading, setLoading] = useState(false);
    const [errorText, setErrorText] = useState("");
    const navigate = useNavigate();
    const [axiosSecure] = useAxiosSecure();
    // const [addtoCard, setAddToCard] = useState(null)
    // const [] = useAddtoCard(addtoCard);
    const [, refatch] = useAddtoCardGetData();


    useEffect(() => {
        setTimeout(() => {
            setErrorText("")
        }, 4000);
    }, [errorText])

    useEffect(() => {
        const price = product?.price * counetr
        setTotalPrice(price)
    }, [counetr])


    const allCutFunction = () => {
        setTotalPrice(0);
        setWarningText("");
        setCounter(1);
        setImageIndex(0);
        setErrorText("")
    }

    const Increase = () => {
        if (counetr >= 10) {
            return
        }
        if (product?.quantity <= counetr) {
            setWarningText("Opps! Product Not Available")
            setTimeout(() => {
                setWarningText("");
            }, 3000);
            return
        }
        setCounter(counetr + 1)
    }

    const decrease = () => {
        if (counetr <= 1) {
            return
        }
        setCounter(counetr - 1)
        setWarningText("")
    }

    const addToFavourive = (product, imageUrl) => {
        setLoading(true)
        const { _id, images, ...rest } = product
        const productData = { mainId: _id, ...rest, imageUrl: imageUrl, email: user?.email }
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
            toast.warn("You Can't Save More Then 5 Product", {
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
        // axios.post("https://kids-land-server-two.vercel.app/favouriteProducts", productData)

        axiosSecure.post(`/favouriteProducts?email=${user?.email}`, productData)
            .then(data => {
                if (data.data.exist) {
                    setLoading(false)
                    setErrorText(data.data.message)
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
        const { _id, images, description, ...rest } = data;

        const productData = { mainId: _id, ...rest, email: user?.email, imageUrl: image};
        axios.post("https://kids-land-server-two.vercel.app/addToCard", productData)
            .then((data) => {
                if (data.data.exist) {
                    setWarningText(`${data.data.message}`)
                    refatch();
                    setTimeout(() => {
                        setWarningText("");
                    }, 3000);
                }
                if (data.data.acknowledged) {
                    setWarningText("Added Product ")
                    refatch();
                    setTimeout(() => {
                        setWarningText("");
                    }, 3000);
                }
            })
    }


    return (
        <div>
            
            <dialog id="show_more_with_modal" className="modal">
                <form method="dialog" className="modal-box w-11/12 max-w-5xl relative">
                    <div className="grid md:grid-cols-2 justify-center items-center ">
                        <div className="image-div w-full md:w-10/12">

                            <img className="image w-full h-[400px] " src={product.images[imageIndex]} alt="" />

                            <div className="img-div flex justify-center">
                                {
                                    product?.images.map((image, index) =>
                                        <img src={image} onClick={() => setImageIndex(index)} className={`${imageIndex === index ? "addStyle" : "removeStyle"} w-20 h-20 m-1`} alt="" />
                                    )
                                }
                            </div>

                        </div>

                        <div className="text-div -mt-14">

                            <h3 className="font-bold text-lg headline-bg-style "> {product?.title} </h3>
                            <div className="mt-4">
                                <p className="text-justify">description :: {product?.description}</p>
                                <p className="mt-2">price :: <span className="text-red-600 font-semibold">{product?.price}</span> $/=</p>
                                <p>quantity :: {product?.quantity}</p>
                                <p>uploaded date :: {product?.upload_date}</p>
                                <p>brand :: {product?.brand}</p>
                                <p>material :: {product?.material}</p>
                            </div>

                            {/* <div className="flex">
                                <p className="flex items-center"> <span className="font-semibold">Show Size</span> ::
                                    <small onClick={() => setSize("XS")} className="mx-2 cursor-pointer bg-green-200 rounded-2xl block w-6 h-6 text-center" >XS</small>
                                    <small onClick={() => setSize("S")} className="mx-1 cursor-pointer bg-green-200 rounded-2xl block w-6 h-6 text-center" >S</small>
                                    <small onClick={() => setSize("MD")} className="mx-1 cursor-pointer bg-green-200 rounded-2xl block w-6 h-6 text-center" >MD</small>
                                    <small onClick={() => setSize("LG")} className="mx-1 cursor-pointer bg-green-200 rounded-2xl block w-6 h-6 text-center" >LG</small>
                                    <small onClick={() => setSize("XL")} className="mx-1 cursor-pointer bg-green-200 rounded-2xl block w-6 h-6 text-center" >XL</small>
                                    <small onClick={() => setSize("2XL")} className="mx-1 cursor-pointer bg-green-200 rounded-2xl block w-6 h-6 text-center" >2XL</small>
                                </p>

                                {
                                    size && <p className='bg-slate-300 ms-5 rounded-full px-1 w-8 h-8 text-center items-center pt-1 font-semibold'>{size}</p>
                                }
                            </div> */}

                            {/* <div className="flex items-center "> */}

                                {/* <div className="flex w-4/12 justify-between">
                                    <div onClick={decrease} className="w-10 h-10 text-2xl bg-slate-100 flex items-center justify-center cursor-pointer">-</div>
                                    <div className="w-10 h-10 text-2xl bg-slate-100 flex items-center justify-center cursor-pointer"> {counetr} </div>
                                    <div onClick={Increase} className="w-10 h-10 text-2xl bg-slate-100 flex items-center justify-center cursor-pointer"> + </div>
                                </div> */}

                                {/* <h2 className=" ms-8"> Price :: <span className="text-red-600 text-xl font-bold">{totalPrice || product?.price} $</span> </h2> */}
                                {/* <h2 className=" ms-8"> Price :: <span className="text-red-600 text-xl font-bold">{totalPrice === 0 ? product?.price : totalPrice} $</span> </h2> */}

                            {/* </div> */}
                            {
                                warningText && <p className="bg-yellow-200 py-1 text-red-500 w-5/12 text-center rounded-full mt-1 text-xs font-bold">{warningText}</p>
                            }

                            <div className="flex items-center mt-3">

                                <span onClick={() => addtoCardFun(product, product?.images[imageIndex])} className="flex me-5 items-center  border-dotted border-2 cursor-pointer  justify-center border-sky-500 px-2 rounded bg-sky-100 text-sky-900 font-semibold ">Add To Card <AiOutlineShoppingCart className="ms-2 text-green-500 font-bold text-xl"></AiOutlineShoppingCart> </span>

                                <Link className=" px-3  me-5 block border-dotted border-2 text-center rounded bg-gray-400 hover:bg-gray-700 hover:text-white duration-500 font-semibold" to={"/seeAll"}>Go to Favourite</Link>

                                <span className=''>
                                    {
                                        loading ? <div className=""> <span className="loading text-black loading-infinity loading-md"></span></div>
                                            :
                                            <span onClick={() => addToFavourive(product, product.images[imageIndex])} className="flex justify-center items-center text-white cursor-pointer">
                                                <GiSelfLove className="text-2xl text-red-500 " ></GiSelfLove>
                                            </span>
                                    }
                                </span>
                            </div>
                            {
                                errorText && <small className="text-red-500">{errorText}</small>
                            }


                        </div>
                    </div>
                    <div onClick={() => allCutFunction()} className=" absolute z-30 top-3 right-3  flex justify-center items-center">
                        <button className="bg-green-300 rounded-full w-10 h-10 font-bold hover:text-red-500 duration-500 text-xl">X</button>
                    </div>
                </form>
            </dialog>

        </div>
    );
};

export default ShowMoreWithModal;