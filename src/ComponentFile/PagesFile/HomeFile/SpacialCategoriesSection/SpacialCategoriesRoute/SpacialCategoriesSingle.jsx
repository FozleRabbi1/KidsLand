import { useQuery } from '@tanstack/react-query';
import { useContext, useEffect } from 'react';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useSpacialCategoriesData from '../../../../HooksFile/useSpacialCategoriesData';
import Marquee from 'react-fast-marquee';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import useFavouriteProduct from '../../../../HooksFile/useFavouriteProduct';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../../AuthProvider/AuthContextProvider';
import axios from 'axios';
import { GiSelfLove } from 'react-icons/gi';

const SpacialCategoriesSingle = () => {
    const [imageIndex, setImageIndex] = useState(0);
    const [size, setSize] = useState("");
    const [counetr, setCounter] = useState(1);
    const [totalPrice, setTotalPrice] = useState(0);
    const [warningText, setWarningText] = useState("");
    const [data, setdata] = useState({})
    const [datas] = useSpacialCategoriesData("All");
    const { id } = useParams();
    const [favouriteProducts, favaouriteRefatch] = useFavouriteProduct();
    const { user } = useContext(AuthContext);
    const [loading, setLoading] = useState(false);


    const { data: datass = {}, refetch } = useQuery({
        queryKey: ["SpacialCategoriesSingle", id],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/SpacialCategoriesSingle/${id}`);
            const data = await res.json();
            setdata(data)
            // return data;
        },
    });
    const { images } = data


    useEffect(() => {
        const price = data?.price * counetr
        setTotalPrice(price)
    }, [counetr, data])



    const Increase = () => {
        if (counetr >= 10) {
            return
        }
        if (data?.quantity <= counetr) {
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

    const getMarqueValue = (data) => {
        setdata(data)
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
        axios.post("http://localhost:5000/favouriteProducts", productData)
            .then(data => {
                console.log(data.data)
                if(data.data.exist){
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
                }
                if (data.data.acknowledged) {
                    setLoading(false)
                    favaouriteRefatch()
                }
            })
    }



    return (
        <div>

            <h2 className='text-color text-center py-5 text-3xl font-bold'>Spacial Product</h2>

            {
                data &&
                <div className="grid md:grid-cols-2 justify-center md:px-16 my-4">
                    <div className="image-div w-full md:w-10/12 flex">

                        <div className="img-div flex items-center flex-col justify-center me-2">
                            {
                                images?.map((image, index) =>
                                    <img src={image} onClick={() => setImageIndex(index)} className={` ${imageIndex === index ? "addStyle" : "removeStyle"} w-20 h-20 m-1`} alt="" />
                                )
                            }
                        </div>
                        <img className="image w-[360px] h-[380px] " src={images && images[imageIndex]} alt="" />

                    </div>

                    <div className="text-div">

                        <h3 className="font-bold text-lg"> {data?.title} </h3>
                        <div className="mt-4">
                            <p className="text-justify">description :: {data?.description}</p>
                            <p className="mt-2">price :: <span className="text-red-600 font-semibold">{data?.price}</span> $/=</p>
                            <p>quantity :: {data?.quantity}</p>
                            <p>uploaded date :: {data?.upload_date}</p>
                            <p>brand :: {data?.brand}</p>
                            <p>material :: {data?.material}</p>
                            <p>Gender :: {data.gender}</p>
                        </div>

                        <div>
                            <p className="flex items-center">Size ::
                                <small onClick={() => setSize("XS")} className="mx-2 cursor-pointer bg-green-200 rounded-2xl block w-6 h-6 text-center" >XS</small>
                                <small onClick={() => setSize("S")} className="mx-1 cursor-pointer bg-green-200 rounded-2xl block w-6 h-6 text-center" >S</small>
                                <small onClick={() => setSize("MD")} className="mx-1 cursor-pointer bg-green-200 rounded-2xl block w-6 h-6 text-center" >MD</small>
                                <small onClick={() => setSize("LG")} className="mx-1 cursor-pointer bg-green-200 rounded-2xl block w-6 h-6 text-center" >LG</small>
                                <small onClick={() => setSize("XL")} className="mx-1 cursor-pointer bg-green-200 rounded-2xl block w-6 h-6 text-center" >XL</small>
                                <small onClick={() => setSize("2XL")} className="mx-1 cursor-pointer bg-green-200 rounded-2xl block w-6 h-6 text-center" >2XL</small>
                            </p>
                        </div>

                        <div className="flex items-center mt-2 ">

                            <div className="flex w-4/12 justify-between">
                                <div onClick={decrease} className="w-10 h-10 text-2xl bg-slate-200 flex items-center justify-center cursor-pointer">-</div>
                                <div className="w-10 h-10 text-2xl bg-slate-200 flex items-center justify-center cursor-pointer"> {counetr} </div>
                                <div onClick={Increase} className="w-10 h-10 text-2xl bg-slate-200 flex items-center justify-center cursor-pointer"> + </div>
                            </div>

                            <h2 className=" ms-8"> Price :: <span className="text-red-600 text-xl font-bold">{isNaN(totalPrice) ? data?.price : totalPrice} $</span> </h2>

                        </div>
                        {
                            warningText && <p className="bg-yellow-200 text-red-500 w-5/12 text-center rounded-full mt-1 text-xs font-bold">{warningText}</p>
                        }


                        <div className='flex items-center mt-4'>
                            <span className="flex items-center  border-dotted border-2 w-3/12 cursor-pointer justify-center border-sky-500 px-2 rounded bg-sky-100 hover:bg-sky-300 duration-500 text-sky-900 font-semibold ">Add To Card <AiOutlineShoppingCart className="ms-2 text-green-500 font-bold text-xl"></AiOutlineShoppingCart> </span>

                            <Link className="w-3/12 px-3 block border-dotted border-2 text-center rounded bg-gray-400 hover:bg-gray-700 hover:text-white duration-500 font-semibold ms-5" to={"/seeAll"}>Go to Favourite</Link>

                            <span className=' ms-5'>
                                {
                                    loading ? <div className=""> <span className="loading text-black loading-infinity loading-md"></span></div>
                                        :
                                        <span onClick={() => addToFavourive(data, data.images[imageIndex])} className="flex justify-center items-center text-white cursor-pointer">
                                            <GiSelfLove className="text-2xl text-red-500 " ></GiSelfLove>
                                        </span>
                                }
                            </span>
                        </div>




                    </div>

                </div>
            }


            <h2 className='bg-green-800 text-white text-center rounded-full w-6 h-6'>{datas?.length}</h2>

            <div>
                <Marquee pauseOnHover delay={2}>
                    {
                        datas?.map((data, index) =>
                            <div key={data} onClick={() => getMarqueValue(data)} className='m-2 relative'>
                                <img className='h-44 w-44' src={data?.images[0]} alt="" />
                                <p className='absolute top-0 right-1 bg-gray-800 text-white text-center rounded-full w-6 h-6'>{index + 1}</p>
                            </div>
                        )
                    }
                </Marquee>
            </div>




        </div>
    );
};

export default SpacialCategoriesSingle;