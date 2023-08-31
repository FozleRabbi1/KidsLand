import React from 'react';
import { useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import './Count.css';

const Count = () => {
    const [counterOn, setCounterOn] = useState(false)
    return (
        <div className='counter-parent-div mb-5 md:mb-20 md:mt-10 '>
            {/* <div className='counter-parent-div md:mb-36 md:mt-20 md:py-10 mb-10'> */}
            <h2 className='main-headline-bg-style text-center text-xl md:text-3xl font-bold'> Transactions </h2>


            <div className='counter-div grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center  text-center gap-5 md:gap:10'>
                <div className='div'>
                    <p className='font-semibold italic border-b-2 w-8/12 mb-2 mx-auto'>Total Product</p>
                    <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                        {
                            counterOn && <h2 className='text-red-600 text-3xl font-bold'> <CountUp start={0} end={59} duration={5} delay={0}></CountUp> +</h2>
                        }
                    </ScrollTrigger>
                </div>

                <div className='div'>
                    <p className='font-semibold italic border-b-2 w-8/12 mb-2 mx-auto'>Selling Product</p>
                    <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                        {
                            counterOn && <h2 className='text-red-600 text-3xl font-bold'> <CountUp start={0} end={578} duration={5} delay={0}></CountUp> +</h2>
                        }
                    </ScrollTrigger>
                </div>

                <div className='div'>
                    <p className='font-semibold italic border-b-2 w-8/12 mb-2 mx-auto'>Happy Client</p>
                    <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                        {
                            counterOn && <h2 className='text-red-600 text-3xl font-bold'> <CountUp start={0} end={523} duration={5} delay={0}></CountUp> +</h2>
                        }
                    </ScrollTrigger>
                </div>

                <div className='div'>
                    <p className='font-semibold italic border-b-2 w-8/12 mb-2 mx-auto'>Total Users</p>
                    <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                        {
                            counterOn && <h2 className='text-red-600 text-3xl font-bold'> <CountUp start={0} end={1423} duration={5} delay={0}></CountUp> +</h2>
                        }
                    </ScrollTrigger>
                </div>


            </div>

        </div>
    );
};

export default Count;