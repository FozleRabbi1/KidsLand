import React from 'react';
import { Link } from 'react-router-dom';
import './ContactUs.css'

const ContactUs = () => {
    return (
        <div>
            <div>
                <div className="contactUs-header-div text-center my-5">
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

            </div>

            <section className='bg-white grid grid-cols-2 justify-center'>
                <div className='contact-details-div'>
                    <h2>CONTACT DETAILS</h2>

                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Mauris fermentum dictum magna. Sed laoreet aliquam leo. Ut tellus dolor, dapibus eget, elementum vel, cursus eleifend, elit. Aenean auctor wisi et urna. Aliquam erat volutpat.</p>
                    <h2>Suspendisse sollicitudin velit sed leo. Ut phare nec augue.</h2>
                </div>
                <div className='contact-form-div'>
                    <h2>CONTACT FORM</h2>
                </div>
            </section>


        </div>
    );
};

export default ContactUs;