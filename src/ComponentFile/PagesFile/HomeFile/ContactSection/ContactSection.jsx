import React from 'react';
import { AiOutlineFieldTime, AiOutlineMail } from 'react-icons/ai';
import { MdLocalPhone, MdLocationOn } from 'react-icons/md';
import './ContackSection.css'
import Wave from 'react-wavify';

const ContactSection = () => {
    return (
        <div>
            <div className=" contact-section-div grid md:grid-cols-2 mx-10 md:mx-0 lg:grid-cols-4 gap-x-28 gap-y-10 md:gap-10 my-10 py-10 md:py-28">

                <div data-aos="fade-up" className=" contact-section-childDiv office">
                    <MdLocationOn className='contactSection-icon'></MdLocationOn>
                    <h2 className="border-b-4 w-8/12 mx-auto" >OFFICE</h2>
                    <p >44 Shirley Ave.</p>
                    <p >West Chicago, IL 60185</p>
                        <Wave className='wave-style h-14 -mt-2' fill='#00ffff'
                            paused={false}
                            options={{
                                height: 20,
                                amplitude: 20,
                                speed: 0.15,
                                points: 3
                            }}
                        />
                </div>
                <div data-aos="fade-up"  data-aos-delay="500" className=" contact-section-childDiv callUs">
                    <MdLocalPhone className='contactSection-icon'></MdLocalPhone>
                    <h2 className="border-b-4 w-8/12 mx-auto" >CONTACT US</h2>
                    <p>900-344-1147</p>
                    <p>132-332-4476</p>
                    <Wave className='wave-style h-14 -mt-2' fill='#00ffff'
                            paused={false}
                            options={{
                                height: 20,
                                amplitude: 20,
                                speed: 0.15,
                                points: 3
                            }}
                        />
                </div>
                <div data-aos="fade-up"  data-aos-delay="800" className=" contact-section-childDiv mailUs">
                    <AiOutlineMail className='contactSection-icon'></AiOutlineMail>
                    <h2 className="border-b-4 w-8/12 mx-auto" >MAIL US</h2>
                    <p>info@packers.com</p>
                    <p>someone@domain.com</p>
                    <Wave className='wave-style h-14 -mt-2' fill='#00ffff'
                            paused={false}
                            options={{
                                height: 20,
                                amplitude: 20,
                                speed: 0.15,
                                points: 3
                            }}
                        />
                </div>
                <div data-aos="fade-up"  data-aos-delay="1100"  className=" contact-section-childDiv opening">
                    <AiOutlineFieldTime className='contactSection-icon'></AiOutlineFieldTime>
                    <h2 className="border-b-4 w-8/12 mx-auto" >OPENING HOURS</h2>
                    <p>Mon – Sat 9 am to 8 pm</p>
                    <p>Sun – 10 am to 3 pm</p>
                    <Wave className='wave-style h-14 -mt-2' fill='#00ffff'
                            paused={false}
                            options={{
                                height: 20,
                                amplitude: 20,
                                speed: 0.15,
                                points: 3
                            }}
                        />

                </div>

            </div>
        </div>
    );
};

export default ContactSection;