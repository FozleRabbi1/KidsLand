import React from 'react';
import './Latest.css'

const LatetsProduce = () => {
    return (
        <div className='mt-10 md:mt-20'>
            <div className='latest-product-main-div'>
                <h2 data-aos="flip-up" className='main-headline-bg-style text-center text-xl md:text-3xl font-bold mt-2 md:mt-5'>Latest Product <small className='text-sm'>(TODO)</small> </h2>
                <div className=' pb-10 grid md:grid-cols-2 justify-center gap-y-5 md:gap-5 lg:gap-10 items-center'>

                    <div data-aos="flip-left" className="container  grid grid-cols-2">
                        <div className="card_box w-4/12 md:w-5/12 lg-3/12">
                            <span></span>
                            <img className='' src="https://images.unsplash.com/photo-1578897366846-358bb1c2412a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmFieSUyMGRyZXNzfGVufDB8fDB8fHww&w=1000&q=80" alt="" />
                        </div>
                        <div className='w-8/12 p-1  ps-3 grid items-center'>
                            <div className=''>
                                <h2 className=' font-bold italic text-xl text-amber-500' >Lorem ipsumsit amet consectetur</h2>
                                <p className='md:text-justify pe-2 text-sm md:text-base'>Lorem ipsum, dolor adipisicing elit. Quisquam hic corporis nostrum incidunt amet maiores.</p>

                                <div data-tooltip="Price:-$40" className="button mt-3">
                                    <div className="button-wrapper">
                                        <div className="text">Buy Now</div>
                                        <span className="icon">
                                            <svg viewBox="0 0 16 16" className="bi bi-cart2" fill="currentColor" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"></path>
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div data-aos="flip-right" className="container  grid grid-cols-2">
                        <div className="card_box w-4/12 md:w-5/12 lg-3/12">
                            <span></span>
                            <img className='' src="https://images.unsplash.com/photo-1578897366846-358bb1c2412a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmFieSUyMGRyZXNzfGVufDB8fDB8fHww&w=1000&q=80" alt="" />
                        </div>
                        <div className='w-8/12 p-1  ps-3 grid items-center'>
                            <div className=''>
                                <h2 className='font-bold italic text-xl text-amber-500' >Lorem ipsum, dolor  consectetur</h2>
                                <p className='text-justify pe-2'>Lorem ipsum, dolor sit amet  elit. Quisquam hic corporis nostrum incidunt amet maiores.</p>

                                <div data-tooltip="Price:-$45" className="button mt-3">
                                    <div className="button-wrapper">
                                        <div className="text">Buy Now</div>
                                        <span className="icon">
                                            <svg viewBox="0 0 16 16" className="bi bi-cart2" fill="currentColor" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"></path>
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div data-aos="flip-left" className="container  grid grid-cols-2">
                        <div className="card_box w-4/12 md:w-5/12 lg-3/12">
                            <span></span>
                            <img className='' src="https://www.monsoon.co.uk/dw/image/v2/BDLV_PRD/on/demandware.static/-/Sites-monsoon-master-catalog/default/dwdd4a7a52/images/large/51_51219611.jpg?sw=594&sh=761&sm=cut" alt="" />
                        </div>
                        <div className='w-8/12 p-1  ps-3 grid items-center'>
                            <div className=''>
                                <h2 className='font-bold italic text-xl text-amber-500' >Lorem ipsum, dolor  consectetur</h2>
                                <p className='text-justify pe-2'>Lorem ipsum, dolor sit amet  elit. Quisquam hic corporis nostrum incidunt amet maiores.</p>

                                <div data-tooltip="Price:-$45" className="button mt-3">
                                    <div className="button-wrapper">
                                        <div className="text">Buy Now</div>
                                        <span className="icon">
                                            <svg viewBox="0 0 16 16" className="bi bi-cart2" fill="currentColor" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"></path>
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div data-aos="flip-right" className="container  grid grid-cols-2">
                        <div className="card_box w-4/12 md:w-5/12 lg-3/12">
                            <span></span>
                            <img className='' src="https://www.monsoon.co.uk/dw/image/v2/BDLV_PRD/on/demandware.static/-/Sites-monsoon-master-catalog/default/dwdd4a7a52/images/large/51_51219611.jpg?sw=594&sh=761&sm=cut" alt="" />
                        </div>
                        <div className='w-8/12 p-1  ps-3 grid items-center'>
                            <div className=''>
                                <h2 className='font-bold italic text-xl text-amber-500' >Lorem ipsum, dolor  consectetur</h2>
                                <p className='text-justify pe-2'>Lorem ipsum, dolor sit amet  elit. Quisquam hic corporis nostrum incidunt amet maiores.</p>

                                <div data-tooltip="Price:-$45" className="button mt-3">
                                    <div className="button-wrapper">
                                        <div className="text">Buy Now</div>
                                        <span className="icon">
                                            <svg viewBox="0 0 16 16" className="bi bi-cart2" fill="currentColor" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"></path>
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default LatetsProduce;