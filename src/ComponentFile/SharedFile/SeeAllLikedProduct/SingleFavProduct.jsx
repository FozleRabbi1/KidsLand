import axios from 'axios';
import React from 'react';
import { GiSelfLove } from 'react-icons/gi';
import useFavouriteProduct from '../../HooksFile/useFavouriteProduct';
import { useState } from 'react';
import { MdDeleteForever } from "react-icons/md";
import { AiFillEye, AiOutlineShoppingCart } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAddtoCardGetData from '../../HooksFile/useAddtoCardGetData';
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthContextProvider';
import { toast } from 'react-toastify';

const SingleFavProduct = ({ data }) => {
    const [, favaouriteRefatch] = useFavouriteProduct();
    const [loadingId, setLoadingId] = useState("");
    const [, refatch] = useAddtoCardGetData();
    const {user} = useContext(AuthContext)


    const deleteFunction = (id) => {
        setLoadingId(id)
        axios.delete(`https://kids-land-server-two.vercel.app/favouriteProducts/${id}`)
            .then(data => {
                favaouriteRefatch()
            })
    }

    const addtoCardFun = (data) => {
        const { _id, ...rest } = data
        console.log(data);

        const productData = { mainId: _id, ...rest, email: user?.email };
        axios.post("https://kids-land-server-two.vercel.app/addToCard", productData)
            .then((data) => {
                if (data.data.exist) {
                    toast.warn("Product Already Exist", {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                    });
                }
                if (data.data.acknowledged) {
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: 'Product Added',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    refatch();
                }
            })
    }


    return (
        <div className='my-4'>

            <div className='flex bg-gray-700 text-white justify-between px-4 items-center'>
                <img className='w-32 h-32 p-1 rounded-lg' src={data.imageUrl} alt="" />

                <div className=' w-3/12'>
                    <p className="">price :: <span className="text-red-600 font-semibold">{data?.price}</span> $/=</p>
                    <p>quantity :: {data?.quantity}</p>
                    <p>uploaded date :: {data?.upload_date}</p>
                </div>

                <div className=' w-3/12'>
                    <p>brand :: {data?.brand}</p>
                    <p>material :: {data?.material}</p>
                    {
                        data?.favourite && <GiSelfLove className="text-xl text-red-600 " ></GiSelfLove>
                    }
                </div>

                <div>

                    <li onClick={() => deleteFunction(data?._id)} className='list-none rounded flex justify-center bg-slate-300 hover:bg-red-200 duration-500 cursor-pointer px-2'>
                        <button className=' text-center text-black flex justify-center items-center px-2 py-1 '>

                            {loadingId === data?._id ? (

                                <div className='flex'>
                                    <span className="loading loading-spinner text-info"></span>
                                </div>

                            ) : (
                                <MdDeleteForever className='text-2xl text-red-500'></MdDeleteForever>
                            )}

                        </button>
                    </li>

                    <li onClick={() => addtoCardFun(data)} className='list-none rounded bg-slate-300  cursor-pointer my-2 px-2 hover:bg-cyan-200 duration-500 '>
                        <button className='flex justify-center items-center px-2 py-1 '> <AiOutlineShoppingCart className='text-2xl text-sky-500 '></AiOutlineShoppingCart> </button>
                    </li>

                    <li className='list-none rounded bg-slate-300 cursor-pointer px-2 hover:bg-green-200 duration-500'>
                        <Link to={`/spacialDetails/${data.mainId}`} className='flex justify-center items-center px-2 py-1'> <AiFillEye className='text-2xl text-green-600'></AiFillEye> </Link>
                    </li>

                </div>

            </div>

        </div>
    );
};

export default SingleFavProduct;