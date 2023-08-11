import React from 'react';
import Marquee from "react-fast-marquee";
import './BrandSection.css'

const BrandSection = () => {
    return (
        <div className='py-10'>
            <h2 className='text-center text-4xl font-bold text-color pb-10'>Our Brand</h2>

            <div className="brand-logo-div">
                <Marquee >

                    <img className=' rounded-full m-5 h-44' src="https://images-platform.99static.com//k6Z_q1rN2rA2k66I70OHIfMyfpI=/452x0:1055x603/fit-in/590x590/99designs-contests-attachments/57/57886/attachment_57886318" alt="" />
                    <img className=' rounded-full m-5 h-44' src="https://i.pinimg.com/736x/cf/6f/bf/cf6fbfe07a7a9592ead57979b218af29.jpg" alt="" />
                    <img className=' rounded-full m-5 h-44' src="https://www.designevo.com/res/templates/thumb_small/red-fashion-clothes-hanger.webp" alt="" />
                    <img className=' rounded-full m-5 h-44' src="https://www.logodesign.net/images/artical/fashion-logo/Fashion-Logo-11.png" alt="" />
                    <img className=' rounded-full m-5 h-44' src="https://t4.ftcdn.net/jpg/01/94/15/39/360_F_194153984_2OlRQYPKUyGQCWiJpPElk7zzF08QY6aR.jpg" alt="" />
                    <img className=' rounded-full m-5 h-44' src="https://logo.com/image-cdn/images/kts928pd/production/d7e1b8318d0b6932c9c3521620eaab00bf907799-357x347.png?w=1080&q=72" alt="" />

                </Marquee>
            </div>
        </div>
    );
};

export default BrandSection;