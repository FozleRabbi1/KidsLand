import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import './SpatialCategories.css'
import useSpacialCategoriesData from '../../../HooksFile/useSpacialCategoriesData';
import { Pagination } from 'swiper/modules';

const SpacialCategories = () => {
    const [imageIndex, setImageIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState("All")
    const [selectedSerialNumber, setSelectedSerialNumber] = useState("1")
    const [activeIndexNo, setactiveIndexNo] = useState(0);
    const [datas, refetch, isLoading] = useSpacialCategoriesData(selectedOption);
    const [swiper, setSwiper] = useState(null);
    const [imageError, setImageError] = useState(false);

    // console.log("selectedSerialNumber", selectedSerialNumber)
    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value)
    }
    useEffect(() => {
        refetch()
    }, [selectedOption])


    // console.log(selectedOption)


    // const serialNumberFul = (e) => {
    //     setSelectedSerialNumber(e.target.value)
    //     const serialNumber = parseInt(e.target.value);
    //     setactiveIndexNo(serialNumber)
    // }

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

    return (
        <div>
            <h2 className='text-center text-2xl font-bold text-color pb-10'>Spacial Cullection</h2>

            <div className='spacial-main-div '>
                <div className="show-details-div relative  md:w-5/12">
                    {imageError ? (
                        <p onMouseOver={() => setImageError(false)} >
                            <img className='img' src="https://t4.ftcdn.net/jpg/02/51/95/53/360_F_251955356_FAQH0U1y1TZw3ZcdPGybwUkH90a3VAhb.jpg" alt="" />
                        </p>
                    ) : (
                        <img
                            src={datas[activeIndexNo]?.images[imageIndex]}
                            onMouseOver={setIndexFun}
                            alt="Image"
                            onError={() => setImageError(true)}
                        />
                    )}
                    <p className='absolute top-1 left-4 text-xl font-bold'> {datas[activeIndexNo]?.images.length} / {imageIndex + 1} </p>
                </div>
                <div className="slider w-10/12 md:w-7/12">
                    {
                        isLoading ? "Loading..........." :
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
                                            <button className='button' onClick={() => slidePrev()} >pre</button>
                                            <button className='ms-2 button' onClick={() => slideNext()} >next</button>
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
                    }
                </div>


            </div>
        </div>
    );
};

export default SpacialCategories;