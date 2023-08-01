import React, { useContext, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import './SpatialCategories.css'
import useSpacialCategoriesData from '../../../HooksFile/useSpacialCategoriesData';
import { Pagination } from 'swiper/modules';
import { GiSelfLove } from "react-icons/gi";
import useFavouriteProduct from '../../../HooksFile/useFavouriteProduct';
import axios from 'axios';
import { toast } from 'react-toastify';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { AuthContext } from '../../../AuthProvider/AuthContextProvider';
import Skeleton from 'react-loading-skeleton';

const SpacialCategories = () => {
    const [imageIndex, setImageIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState("All")
    const [selectedSerialNumber, setSelectedSerialNumber] = useState("1")
    const [activeIndexNo, setactiveIndexNo] = useState(0);
    const [datas, refetch, isLoading] = useSpacialCategoriesData(selectedOption);
    const [swiper, setSwiper] = useState(null);
    const [imageError, setImageError] = useState(false);
    const [, favaouriteRefatch] = useFavouriteProduct();
    const { user } = useContext(AuthContext);

    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value)
    }
    useEffect(() => {
        refetch()
    }, [selectedOption])

    const slidePrev = () => {
        if (swiper !== null) {
            swiper.slidePrev();
        }
    };
    useEffect(() => {
        if (activeIndexNo > 0) {
            setImageIndex(0)
            setImageError(false)
        }
    }, [activeIndexNo])

    const slideNext = () => {
        if (swiper !== null) {
            swiper.slideNext();
        }
    };

    const setIndexFun = () => {
        if (datas[activeIndexNo]?.images.length == imageIndex + 1) {
            setImageIndex(0)
        }
        else {
            setImageIndex(imageIndex + 1)
        }
    }

    const SaveOnFavouriteFun = (product, imageUrl) => {
        const { _id, images, ...rest } = product
        const productData = { mainId: _id, ...rest, imageUrl: imageUrl, email: user?.email }

        axios.post("http://localhost:5000/favouriteProducts", productData)
            .then(data => {

                if (data.data.acknowledged) {
                    favaouriteRefatch()
                }
            })

    }

    return (
        <div>
            <h2 className='text-center text-2xl font-bold text-color pb-10'>Spacial Cullection</h2>
            {
                isLoading ?
                    <div className='flex gap-10 items-center' >
                        <div className='w-6/12'><Skeleton width={"82%"} height={550} ></Skeleton></div>
                        <div className='w-6/12 flex gap-10 justify-between'>
                            <Skeleton width={190} height={250} ></Skeleton>
                            <Skeleton width={190} height={250} ></Skeleton>
                            <Skeleton width={190} height={250} ></Skeleton>
                        </div>
                    </div>
                    :

                    <div className='spacial-main-div '>
                        <div className="show-details-div w-9/12 overflow-hidden" >

                            <div className=' relative h-full '>
                                {imageError ? (
                                    <p onMouseOver={() => setImageError(false)} >
                                        <img className='img ' src="https://t4.ftcdn.net/jpg/02/51/95/53/360_F_251955356_FAQH0U1y1TZw3ZcdPGybwUkH90a3VAhb.jpg" alt="" />
                                    </p>
                                ) : (
                                    <img
                                        className=''
                                        src={datas[activeIndexNo]?.images[imageIndex]}
                                        onMouseOver={setIndexFun}
                                        alt="Image"
                                        onError={() => setImageError(true)}
                                    />
                                )}
                                <p className='absolute top-1 left-4 text-xl font-bold'> {datas[activeIndexNo]?.images.length} / {imageIndex + 1} </p>

                                <div className="show-details absolute flex justify-center items-center">
                                    <div className='flex items-center'>


                                        <button className="showMore">Show More</button>
                                        <span className=' w-10 flex justify-center'>
                                            <i onClick={() => SaveOnFavouriteFun(datas[activeIndexNo], datas[activeIndexNo]?.images[imageIndex])} title='Save On Favourite' className=' text-3xl hover:text-4xl duration-700 text-red-700 cursor-pointer'> <GiSelfLove></GiSelfLove>  </i>
                                        </span>
                                        <button className="showMore"> See All </button>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="slider w-10/12 md:w-7/12">
                            <div>
                                <div className=' flex justify-between items-center mb-2'>
                                    <div className={`${activeIndexNo == 0 ? "invisible" : "block"} flex items-center z-10`}>
                                        <h2>{datas.length}/ {activeIndexNo + 1}</h2>
                                        <select
                                            value={selectedOption}
                                            onChange={handleOptionChange}
                                            className="px-4 ms-2 button rounded  text-gray-800"
                                        >
                                            <option className='ms-2' value="All">All</option>
                                            <option className='ms-2' value="Boy">Boy</option>
                                            <option className='ms-2' value="Girl">Girl</option>
                                        </select>
                                    </div>
                                    <div className='flex items-center'>
                                        <div className='flex  items-center'>
                                            <button className='button' onClick={() => slidePrev()} > <AiOutlineArrowLeft className='font-bold' ></AiOutlineArrowLeft> </button>
                                            <button className='ms-2 button' onClick={() => slideNext()} > <AiOutlineArrowRight className='font-bold' ></AiOutlineArrowRight> </button>
                                        </div>
                                    </div>
                                </div>
                                <Swiper
                                    slidesPerView={3}
                                    centeredSlides={true}
                                    spaceBetween={30}
                                    grabCursor={true}
                                    onSwiper={setSwiper}
                                    onSlideChange={(swiper) => setactiveIndexNo(swiper.activeIndex)}
                                    modules={[Pagination]}
                                    className="mySwiper"
                                >
                                    {datas?.map((d, index) => (
                                        <SwiperSlide key={index} className="pb-6">
                                            {({ isActive }) => (
                                                <div
                                                    className=""
                                                    style={{
                                                        border: `${isActive ? "1px solid red" : "none"}`,
                                                        boxShadow: `${isActive ? "3px 5px 10px white" : "none"}`,
                                                    }}
                                                >
                                                    <img className="w-60 h-60" src={d.images[0]} alt="" />
                                                </div>
                                            )}
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                        </div>

                    </div>
            }

        </div>
    );
};

export default SpacialCategories;