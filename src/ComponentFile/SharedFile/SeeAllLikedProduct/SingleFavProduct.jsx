import axios from 'axios';
import React from 'react';
import { GiSelfLove } from 'react-icons/gi';
import useFavouriteProduct from '../../HooksFile/useFavouriteProduct';
import { useState } from 'react';

const SingleFavProduct = ({ data }) => {
    const [, favaouriteRefatch] = useFavouriteProduct();
    const [loadingId, setLoadingId] = useState("");

    const deleteFunction = (id) => {
        setLoadingId(id)
        axios.delete(`http://localhost:5000/favouriteProducts/${id}`)
            .then(data => {
                favaouriteRefatch()
            })
    }

    return (
        <div className='my-2'>

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

                    <li onClick={() => deleteFunction(data?._id)} className='list-none rounded flex justify-center bg-red-500 cursor-pointer px-2'>
                        <button className=' text-center text-black'>
                            {loadingId === data?._id ? (

                                <div className='flex'>
                                    <span className="loading loading-spinner text-info"></span>
                                </div>

                            ) : (
                                "Delete"
                            )}
                        </button>
                    </li>

                    <li className='list-none rounded bg-green-500  cursor-pointer my-2 px-2'>
                        <button>Add To Card</button>
                    </li>

                    <li className='list-none rounded bg-cyan-600 cursor-pointer px-2'>
                        <button> View Details </button>
                    </li>
                </div>

                {/* <div>
                    <li className='list-none'> <button>Add To Card</button> </li>
                    <li onClick={() => deleteFunction(data?._id)} className='list-none'> <button>
                        {`${loadingId === data?._id ?
                            (
                                <div>
                                    <span className="loading loading-spinner text-info"></span>
                                </div>
                            )
                            : "Delete"}`}
                    </button> </li>
                </div> */}

            </div>

        </div>
    );
};

export default SingleFavProduct;