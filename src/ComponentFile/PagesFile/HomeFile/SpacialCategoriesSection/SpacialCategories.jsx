import React, { useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import './SpatialCategories.css'
import useSpacialCategoriesData from '../../../HooksFile/useSpacialCategoriesData';
import { Pagination } from 'swiper/modules';

const SpacialCategories = () => {
    const [datas, refetch, isLoading] = useSpacialCategoriesData();

    const [activeIndexNo, setactiveIndexNo] = useState(0);
    const [swiper, setSwiper] = useState(null);
    const slidePrev = () => {
        if (swiper !== null) {
            swiper.slidePrev();
        }
    };
    console.log(datas[activeIndexNo])

    const slideNext = () => {
        if (swiper !== null) {
            swiper.slideNext();
        }
    };

    return (
        <div>
            <h2 className='text-center text-2xl font-bold text-color pb-10'>Spacial Cullection</h2>
            

            <div className='grid grid-cols-2 items-center'>
                <div className="show-details-div">

                    <img src={datas[activeIndexNo]?.images[0]} alt="" />

                </div>

                <div className="slider">
                    <div>

                        <div className=' flex justify-between'>
                        <h2>{datas.length}/ {activeIndexNo + 1}</h2>

                            <div className='flex'>
                                <button onClick={() => slidePrev()} >pre</button>
                                <button className='ms-2' onClick={() => slideNext()} >next</button>
                            </div>

                        </div>
                        <Swiper
                            slidesPerView={3}
                            centeredSlides={true}
                            spaceBetween={30}
                            grabCursor={true}
                            onSwiper={setSwiper}
                            // pagination={{
                            //     clickable: true,
                            // }}
                            onSlideChange={(e) => setactiveIndexNo(e.activeIndex)}
                            modules={[Pagination]}
                            className="mySwiper"
                        >
                            {
                                datas?.map((d, index) => {
                                    return (
                                        <SwiperSlide key={index} className="pb-6" >
                                            {({ isActive }) => (
                                                <div className="" style={{ border: `${isActive ? "1px solid red" : "none"}`, boxShadow: `${isActive ? "3px 5px 10px white" : "none"}` }}>
                                                    <img className=" w-60 h-60" src={d.images[0]} alt="" />
                                                </div>
                                            )}
                                        </SwiperSlide>
                                    )
                                }

                                )
                            }
                        </Swiper>
                    </div>
                </div>
            </div>



            {/* {
            datas.map(data => 
            <div>
                <img src={data?.images[0]} alt="" />
            </div> )
        } */}
        </div>
    );
};

export default SpacialCategories;