import React, { useContext, useState } from 'react';
import SeeAllLikedProduct from '../../../../SharedFile/SeeAllLikedProduct/SeeAllLikedProduct';
import useFavouriteProduct from '../../../../HooksFile/useFavouriteProduct';
import axios from 'axios';
import { MdDeleteForever } from 'react-icons/md';
import { AiFillEye, AiOutlineShoppingCart } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../AuthProvider/AuthContextProvider';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import useAddtoCardGetData from '../../../../HooksFile/useAddtoCardGetData';

const AllLikedProduct = () => {
    const [favouriteProducts, favaouriteRefatch] = useFavouriteProduct();
    const [loadingId, setLoadingId] = useState("");
    const {user} = useContext(AuthContext);
    const [addToCardData, refatch] = useAddtoCardGetData()


    const deleteFunction = (id) => {
        setLoadingId(id)
        axios.delete(`http://localhost:5000/favouriteProducts/${id}`)
            .then(() => {
                favaouriteRefatch()
            })
    }


    const addtoCardFun = (data) => {

        const { _id, description, ...rest } = data;

        const productData = { mainId: _id, ...rest, email: user?.email };
        axios.post("http://localhost:5000/addToCard", productData)
            .then((data) => {
                if (data.data.exist) {
                    // setWarningText(`${data.data.message}`)
                    if (data.data.exist) {
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
                    }
                }
                if (data.data.acknowledged) {
                    refatch();
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: 'Product Added',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
            })
    }

    return (
        <div>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className='text-black text-center'>
                            <th>S/N</th>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>AddToCard</th>
                            <th>Details</th>
                            <th>Delete</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            favouriteProducts?.map((data, i) =>
                                <tr className='text-center font-semibold'>
                                    <th>
                                        {i + 1}
                                    </th>
                                    <td className=''>
                                        <div className="mask mask-squircle flex justify-center items-center">
                                            <img className=' w-20 h-20' src={data?.imageUrl} alt="Image not Available" />
                                        </div>
                                    </td>

                                    <td className=' w-48'>{data?.title}</td>
                                    <td>{data?.price} $</td>

                                    <th>
                                        <li onClick={()=>addtoCardFun(data)} className='list-none rounded bg-slate-300 w-6/12 mx-auto  cursor-pointer my-2 px-2 hover:bg-cyan-200 duration-500 '>
                                            <button className='flex justify-center items-center px-2 py-1 '> 
                                            <AiOutlineShoppingCart className='text-2xl text-color ms-1'></AiOutlineShoppingCart> 
                                            </button>
                                        </li>
                                    </th>

                                    <th>
                                        <li className='list-none rounded bg-slate-300 w-6/12 mx-auto cursor-pointer px-2 hover:bg-green-200 duration-500'>
                                            <Link to={`/spacialDetails/${data.mainId}`} className='flex justify-center items-center px-2 py-1'> <AiFillEye className='text-2xl text-green-600'></AiFillEye> </Link>
                                        </li>
                                    </th>

                                    <th>
                                        <li onClick={() => deleteFunction(data?._id)} className='list-none rounded flex justify-center bg-slate-300 hover:bg-red-200 duration-500 cursor-pointer px-2 w-6/12 mx-auto'>
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
                                    </th>
                                </tr>
                            )
                        }

                    </tbody>


                </table>
            </div>

        </div>
    );
};

export default AllLikedProduct;