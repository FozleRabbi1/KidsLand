import './Information.css'
import { BsFillCartCheckFill } from "react-icons/bs";
import { RiCustomerService2Line } from "react-icons/ri";
import { TbTruckDelivery } from "react-icons/tb";
import { BiMoneyWithdraw } from "react-icons/bi";
import { useEffect, useState } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const InformationSection = () => {

    // const isMediumScreen = window.matchMedia('(min-width: 768px)').matches;

    const [scrollX, setScrollX] = useState(window.innerWidth);
  const [isMediumScreen, setIsMediumScreen] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setScrollX(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (scrollX <= 1025) {
      setIsMediumScreen(false);
    } else {
      setIsMediumScreen(true);
    }
  }, [scrollX]);
    


    return (
      
        <div className="px-1 overflow-hidden md:py-20 lg:py-36 md:mt-0 main-info-div grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center gap-10 z-10">

            {/* data-aos="fade-right"  */}
            <div data-aos={isMediumScreen ? 'fade-right' : 'fade-right'} className='flex flex-col justify-center items-center duration-700'>
                <p className=''> <AiOutlineShoppingCart className=' text-4xl text-orange-600 ' ></AiOutlineShoppingCart> </p>
                <h2 className='text-lg font-bold'>Heading</h2>
                <p>Lorem ipsum dolor sit amet</p>
            </div>
            <div data-aos={isMediumScreen ? 'fade-up' : 'fade-left'} className='flex flex-col justify-center items-center'>
                <i> <TbTruckDelivery className=' text-4xl text-orange-600 ' ></TbTruckDelivery> </i>
                <h2 className='text-lg font-bold'>Heading</h2>
                <p>Lorem ipsum dolor sit amet</p>
            </div>
            <div data-aos={isMediumScreen ? 'fade-up' : 'fade-right'} className='flex flex-col justify-center items-center'>
                <i> <BiMoneyWithdraw className=' text-4xl text-orange-600 ' ></BiMoneyWithdraw> </i>
                <h2 className='text-lg font-bold'>Heading</h2>
                <p>Lorem ipsum dolor sit amet</p>
            </div>
            <div data-aos={isMediumScreen ? 'fade-left' : 'fade-left'} className='flex flex-col justify-center items-center'>
                <i> <RiCustomerService2Line className=' text-4xl text-orange-600 ' ></RiCustomerService2Line> </i>
                <h2 className='text-lg font-bold'>Heading</h2>
                <p>Lorem ipsum dolor sit amet</p>
            </div>


        </div>

    );
};

export default InformationSection;