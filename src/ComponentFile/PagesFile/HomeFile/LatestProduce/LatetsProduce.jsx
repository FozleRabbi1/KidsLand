import React from 'react';
import './Latest.css'

const LatetsProduce = () => {
    return (
        <div>
            <h2 className='text-4xl font-bold text-color  mt-5'>Latest Product <small className='text-sm'>(TODO)</small> </h2>
            <div className='latest-product-main-div py-10 grid md:grid-cols-2 justify-center gap-10 items-center'>

                <div className="container  grid grid-cols-2">

                    <div className="card_box w-11/12 md:w-6/12">
                        <span></span>
                        <img className='' src="https://images.unsplash.com/photo-1578897366846-358bb1c2412a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmFieSUyMGRyZXNzfGVufDB8fDB8fHww&w=1000&q=80" alt="" />

                    </div>

                    <div className='5/12 p-1 mt-10 ps-3'>
                        <h2 >Lorem ipsumsit amet consectetur</h2>
                        <p className='text-justify pe-2'>Lorem ipsum, dolor adipisicing elit. Quisquam hic corporis nostrum incidunt amet maiores.</p>

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

                <div className="container  grid grid-cols-2">
                    <div className="card_box w-11/12 md:w-6/12">
                        <span></span>
                        <img className='' src="https://mayaar.store/wp-content/uploads/2022/05/10286_to_10296-a-600x600.webp" alt="" />

                    </div>
                    
                    <div className='5/12 p-1 mt-10 ps-3'>
                        <h2 >Lorem ipsum, dolor  consectetur</h2>
                        <p  className='text-justify pe-2'>Lorem ipsum, dolor sit amet  elit. Quisquam hic corporis nostrum incidunt amet maiores.</p>

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

                <div className="container  grid grid-cols-2">

                    <div className="card_box w-11/12 md:w-6/12">
                        <span></span>
                        <img className='' src="https://ae01.alicdn.com/kf/H21365e49dd95402e85ef5f566fc86420g/Vgiee-Kids-Dresses-For-Girls-Princess-Dress-Girl-For-Party-Dress-Mesh-Sleeveless-Baby-Clothes-Dress.jpg" alt="" />
                    </div>

                    <div className='5/12 p-1 mt-10 ps-3'>
                        <h2 >Lorem ipsum, dolor sit </h2>
                        <p  className='text-justify pe-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam hic corporis  amet maiores.</p>

                        <div data-tooltip="Price:-$65" className="button mt-3">
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

                <div className="container  grid grid-cols-2">
                    <div className="card_box w-11/12 md:w-6/12">
                        <span></span>
                        <img className='' src="https://saradresses.com/cdn/shop/articles/birthday-dress.jpg?v=1681879403" alt="" />
                    </div>

                    <div className='5/12 p-1 mt-10 ps-3'>
                        <h2 >Lorem ipsum, dolor sit amet </h2>
                        <p  className='text-justify pe-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam hic corporis nostrum .</p>
                        <div data-tooltip="Price:-$20" className="button mt-3">
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



                {/* <div className="container  grid grid-cols-2">

                    <div className="card_box">
                        <span></span>
                        <img className='' src="https://saradresses.com/cdn/shop/articles/birthday-dress.jpg?v=1681879403" alt="" />

                    </div>
                    <div>text</div>

                </div>
                <div className="container  grid grid-cols-2">

                    <div className="card_box">
                        <span></span>
                        <img className='' src="https://ae01.alicdn.com/kf/H21365e49dd95402e85ef5f566fc86420g/Vgiee-Kids-Dresses-For-Girls-Princess-Dress-Girl-For-Party-Dress-Mesh-Sleeveless-Baby-Clothes-Dress.jpg" alt="" />

                    </div>
                    <div>text</div>

                </div> */}




            </div>
        </div>
    );
};

export default LatetsProduce;