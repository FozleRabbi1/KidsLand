import React from 'react';
import useAddtoCardGetData from '../../../../HooksFile/useAddtoCardGetData';
import SelectedSingleProduct from './SelectedSingleProduct';

const SelectedProduct = () => {
    const [addToCardData] = useAddtoCardGetData();
    return (
        <div>

            <h2 className='text-center text-3xl font-bold text-color pb-10'> All Selected Product Here </h2>

            <div className='mb-10'>
                <div className="mainDiv p-2 flex justify-between ">

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

        </div>
    );
};

export default SelectedProduct;