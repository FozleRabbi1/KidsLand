import { Swiper, SwiperSlide } from 'swiper/react';

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
        // {
        //     title: "Title Four",
        //     heading: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
        //     image: "https://ae01.alicdn.com/kf/H69fe2b8c9aa24dafbb7613150a21e203s/2020-New-Boys-Clothes-Suits-4-5-6-7-8-9-10-11-12-13-Years.jpg",
        //     description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio, et omnis, rerum maiores laborum  eos placeat quaerat aliquid dignissimos modi fugiat?"
        // },

    ]

    return (
        <div className="pt-4">

            <div className='hidden md:block'>
                <div className='main-div grid md:grid-cols-2 bg-white justify-between'>

                    <div className="dunamic-text-div">

                        <div>
                            <h2 className='headline-bg-style text-color duration-700 text-2xl ps-1 font-bold'>
                                {sliderData[activeIndexNo].title}
                            </h2>
                            <h2 className='text-2xl font-semibold my-1'>
                                {sliderData[activeIndexNo].heading}
                            </h2>
                            <p className='text-justify'>
                                {sliderData[activeIndexNo].description}
                            </p>


                            <button>
                                Hover me
                            </button>

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

                    <div>


                    </div>

                </div>
            </div>

            <div className='block md:hidden '>

               <img className='w-full' src="https://i.pinimg.com/736x/6b/06/27/6b0627f99145e0bfa4a745cc443a2ee4.jpg" alt="" />


            </div>

        </div>
    );
};

export default Banner;
