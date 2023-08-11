import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './ContactUs.css'
import { AiFillFacebook, AiFillTwitterSquare, AiOutlineMail } from "react-icons/ai";
import { BiLogoLinkedinSquare, BiSupport } from "react-icons/bi";
import { FaTumblr, } from "react-icons/fa";
import { MdLocalPhone, MdLocationOn } from "react-icons/md";
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

const ContactUs = () => {
    const form = useRef();
    const [loading, setLoading] = useState(false)

    const getFormValueFun = e => {
        e.preventDefault();
        setLoading(true)

        emailjs.sendForm('service_u8tow69', 'template_mef8qre', form.current, '-R8JfKoESaYjyn0sD')
            .then((result) => {
                console.log(result.text);
                if (result.text) {
                    toast.success('Send your message', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                    });
                    setLoading(false)
                }
            }, (error) => {
                console.log(error.text);
                setLoading(false)
            });

        e.target.reset()
    }
    return (
        <div>
            <div data-aos="flip-up" className="contactUs-header-div text-center my-5">
                <div className="image-div">
                    <img src="https://as1.ftcdn.net/v2/jpg/04/85/64/76/1000_F_485647675_Os2dXV7HlCeBepTrpDB4HdFUB8PMJ1Bs.jpg" alt="" />
                    <div className="overlay"></div>
                </div>
                <h2 className='text-3xl text-white font-semibold mb-4'>Contact-Us</h2>
                <p className='w-9/12 text-white mx-auto leading-4 text-sm'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>

                <div className='text-white'>
                    <Link to={"/"}>Home</Link> / <span>Contact</span>
                </div>

            </div>

            <section className='bg-white grid md:grid-cols-2 justify-center p-10 gap-5'>
                <div data-aos="fade-right" data-aos-delay="1000" className='contact-details-div me-2'>
                    <h2 className='text-4xl'>CONTACT DETAILS</h2>

                    <p className='py-5'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Mauris fermentum dictum magna. Sed laoreet aliquam leo. Ut tellus dolor, dapibus eget, elementum vel, cursus eleifend, elit. Aenean auctor wisi et urna. Aliquam erat volutpat.</p>
                    <h2 className='pb-5 font-semibold text-3xl text-gray-500'>Suspendisse sollicitudin velit sed leo. Ut phare nec augue.</h2>

                    <div>
                        <p className='mb-2 flex items-center'> <MdLocationOn  data-aos="fade-right" data-aos-delay="2200" className='me-2 iconn text-red-600'></MdLocationOn> 121 Wallstreet Street, New York , USA</p>
                        <p className='mb-2 flex items-center'> <MdLocalPhone  data-aos="fade-right" data-aos-delay="2400" className='me-2 iconn text-red-600'></MdLocalPhone> +800 1234 56 78 </p>
                        <p className='mb-2 flex items-center'> <AiOutlineMail  data-aos="fade-right" data-aos-delay="2600" className='me-2 iconn text-red-600'></AiOutlineMail> info@imperion.com</p>
                        <p className='mb-2 flex items-center'> <BiSupport  data-aos="fade-right" data-aos-delay="2800" className='me-2 iconn text-red-600'></BiSupport> Support Center</p>
                    </div>
                    <h2 className='text-2xl'>Stay Connected</h2>
                    <div className='flex mt-2'>
                        <span data-aos="fade-right" data-aos-delay="200" className='me-4'> <AiFillFacebook className='text-2xl'></AiFillFacebook> </span>
                        <span data-aos="fade-right" data-aos-delay="400" className='me-4'> <AiFillTwitterSquare className='text-2xl'></AiFillTwitterSquare> </span>
                        <span data-aos="fade-right" data-aos-delay="600" className='me-4'> <BiLogoLinkedinSquare className='text-2xl'></BiLogoLinkedinSquare> </span>
                        <span data-aos="fade-right" data-aos-delay="800" className='me-4'> <FaTumblr className='text-2xl'></FaTumblr> </span>
                    </div>


                </div>



                <div data-aos="fade-left" data-aos-delay="1000" className='contact-form-div ms-2 mt-4 md:mt-0'>

                    <h2 className='text-4xl'>CONTACT FORM</h2>

                    <form ref={form} onSubmit={getFormValueFun} className=' mt-4 md:mt-10'>
                        <input name='from_name' className='input mb-5' required placeholder='Name' type="text" />
                        <input name='from_email' className='input mb-5' required placeholder='Email' type="email" />
                        <input name='subject' className='input mb-5' required placeholder='Subject' type="text" />
                        <textarea name="message" className='textarea mb-5 h-32' required placeholder='Message' id="" cols="30" rows="10"></textarea>

                        <div className='h-10 mt-2'>
                            {
                                loading ? <span className="loading loading-dots loading-lg form-button"></span> :
                                    <input className='form-button ' type="submit" value="Send" />
                            }
                        </div>

                    </form>

                </div>


            </section>


        </div>
    );
};

export default ContactUs;