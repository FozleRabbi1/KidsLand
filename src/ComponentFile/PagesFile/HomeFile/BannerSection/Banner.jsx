import { Swiper, SwiperSlide } from 'swiper/react';
import Lottie from "lottie-react";
import BirdAnimation from "../../../AnimationJson/bardAnimation2.json"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './Banner.css'

import { EffectFade, Navigation, Pagination } from 'swiper/modules';
import { useState } from 'react';
const Banner = () => {
    const [activeIndexNo, setactiveIndexNo] = useState(0);

    const sliderData = [
        {
            title: "Title One",
            heading: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
            image: "https://cf.shopee.com.my/file/ed8c0e4f5019ab00bf299d13befaa7cd",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. , rerum maiores laborum voluptatibus at natus provident eos placeat quaerat aliquid dignissimos modi fugiat?"
        },
        {
            title: "Title two",
            heading: "Lorem ipsum, dolor sit amet consectetur .",
            image: "https://nronlineshop.pk/wp-content/uploads/2019/12/3.jpg",
            description: "Lorem amet consectetur adipisicing elit. Distinctio, et omnis, rerum maiores laborum voluptatibus at natus provident eos placeat quaerat aliquid dignissimos modi fugiat?"
        },
        {
            title: "Title three",
            heading: "Lorem ipsum, dolor sit amet consectetur adipisicing elit dipisicing elit.",
            image: "https://guide.alibaba.com/image/i3/kids-boys-winter-suit-2016-new-7-children-8-big-virgin-thick-three-sets-of-12-boys-fall-and-winter-15-years-old/TB1tKDQNpXXXXaTXFXXXXXXXXXX_!!0-item_pic.jpg",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio, et omnis, rerum maiores laborum voluptatibus placeat quaerat aliquid dignissimos modi fugiat?"
        },
        {
            title: "Title Four",
            heading: "Lorem ipsum, dolor sit amet  adipisicing elit dipisicing elit.",
            image: "https://i.pinimg.com/736x/6b/06/27/6b0627f99145e0bfa4a745cc443a2ee4.jpg",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio, et omnis, rerum maiores laborum voluptatibus placeat  dignissimos modi fugiat?"
        },

    ]

    return (
        <div className="pt-4">

            <div className='main-div  bg-white '>

                <div className="dunamic-text-div">

                    <div className='px-2 md:px-5 lg:px-20'>
                        <h2 className='headline-bg-style  lg:-mt-10 text-color flex justify-center text-lg md:text-2xl ps-1 font-bold'>
                                {sliderData[activeIndexNo].title}
                        </h2>
                        <h2 className='md:text-lg lg:text-2xl font-semibold my-1'>
                            {sliderData[activeIndexNo].heading}
                        </h2>
                        <p className='text-justify'>
                            {sliderData[activeIndexNo].description}
                        </p>
                        <button className=''>
                            Show More
                        </button>
                    </div>

                    <div className='bird-animation-div overflow-hidden  z-10'>
                        <Lottie className='' animationData={BirdAnimation} ></Lottie>
                        <Lottie className='' animationData={BirdAnimation} ></Lottie>
                        {/* <Lottie animationData={BirdAnimation} ></Lottie> */}
                    </div>

                </div>

                <div className="slider">

                    <Swiper
                        spaceBetween={30}
                        effect={'fade'}
                        navigation={true}
                        pagination={{
                            clickable: true,
                        }}
                        onSlideChange={(e) => setactiveIndexNo(e.activeIndex)}
                        modules={[EffectFade, Navigation, Pagination]}
                        className="mySwiper"
                    >
                        {
                            sliderData.map((data, index) =>
                                <SwiperSlide
                                    key={index}
                                    className='img'>
                                    <img src={data.image} />
                                </SwiperSlide>
                            )
                        }

                    </Swiper>

                </div>

            </div>

            {/* <div className='block md:hidden '>

                <img className='w-full' src="https://i.pinimg.com/736x/6b/06/27/6b0627f99145e0bfa4a745cc443a2ee4.jpg" alt="" />


            </div> */}

        </div>
    );
};

export default Banner;
