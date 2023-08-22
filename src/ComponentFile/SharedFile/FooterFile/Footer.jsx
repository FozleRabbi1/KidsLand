import { AiFillFacebook, AiFillTwitterSquare } from 'react-icons/ai';
import './Footer.css';
import { BiLogoLinkedinSquare } from 'react-icons/bi';
import { FaTumblr } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="py-20 bg-gray-700">
            <footer className="footer px-10 grid lg:grid-cols-4  text-white">
                <div>
                    <span className="main-heading text-4xl font-semibold">Kids Land</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum voluptatum ratione velit deserunt veniam mollitia!</p>

                    <div className='flex mt-2'>
                        <span data-aos="fade-right" data-aos-delay="200" className='me-4'> <AiFillFacebook className='text-3xl text-sky-400 hover:text-sky-600 duration-500 cursor-pointer'></AiFillFacebook> </span>
                        <span data-aos="fade-right" data-aos-delay="400" className='me-4'> <AiFillTwitterSquare className='text-3xl text-sky-400 hover:text-sky-600 duration-500 cursor-pointer'></AiFillTwitterSquare> </span>
                        <span data-aos="fade-right" data-aos-delay="600" className='me-4'> <BiLogoLinkedinSquare className='text-3xl text-sky-400 hover:text-sky-600 duration-500 cursor-pointer'></BiLogoLinkedinSquare> </span>
                        <span data-aos="fade-right" data-aos-delay="800" className='me-4'> <FaTumblr className='text-3xl text-sky-400 hover:text-sky-600 duration-500 cursor-pointer'></FaTumblr> </span>
                    </div>


                </div>
                <div>
                    <span className="footer-headline text-2xl">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-headline text-2xl">   Quick Links</span>
                    <a href=""> About Us </a>
                    <a href=""> Blog </a>
                    <a href=""> Contact </a>
                    <a href=""> Support </a>
                    <a href=""> Applications </a>
                </div>
                <div>
                    <span className="footer-headline text-2xl">Connection</span>
                    <p>Google</p>
                    <p>Subscribe</p>
                    <input className="rounded p-1 outline-none text-black" type="text" />
                </div>
            </footer>

        </div>
    );
};

export default Footer;