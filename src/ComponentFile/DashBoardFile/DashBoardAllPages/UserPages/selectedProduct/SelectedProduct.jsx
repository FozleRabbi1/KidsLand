import React from 'react';
import useAddtoCardGetData from '../../../../HooksFile/useAddtoCardGetData';
import SelectedSingleProduct from './SelectedSingleProduct';

const SelectedProduct = () => {
    const [addToCardData] = useAddtoCardGetData();
    return (
        <div>

            <h2 className='text-center text-3xl font-bold text-color'> All Selected Product Here <sub>(todo)</sub> </h2>
            <div className="mt-3 mb-5 bg-gray-50 rounded-3xl mx-36">
                <marquee className="italic pt-1 " behavior="" direction="" height=""> Kidsland Delight : Grab <span className="text-red-500 font-semibold">10% Off</span> on All Your Favorite Children's Products!</marquee>
            </div>

            {
                addToCardData?.length < 1 ?
                    <div className='h-96 flex justify-center items-center'>
                        <p className='text-3xl font-bold text-red-500'> Selected  Product not available</p>
                    </div>
                    :
                    <div className='mb-10'>
                        <div className="mainDiv flex justify-between ">

                            <div className='flex-1'>
                                {
                                    addToCardData?.map(data =>
                                        <SelectedSingleProduct
                                            key={data._id}
                                            data={data}
                                        ></SelectedSingleProduct>
                                    )
                                }
                            </div>

                            <div className="orderSummary bg-green-200 w-3/12">
                                <h2>Order Summary</h2>
                            </div>

                        </div>
                    </div>
            }

        </div>
    );
};

export default SelectedProduct;