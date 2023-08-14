import React from 'react';
import useAddtoCardGetData from '../../../../HooksFile/useAddtoCardGetData';
import SelectedSingleProduct from './SelectedSingleProduct';

const SelectedProduct = () => {
    const [addToCardData] = useAddtoCardGetData();
    return (
        <div>

            <h2 className='text-center text-3xl font-bold text-color pb-10'> All Selected Product Here </h2>

            <div className='mb-10'>
                <div className="mainDiv w-11/12 p-2">
                    {
                        addToCardData?.map(data =>
                            <SelectedSingleProduct
                                key={data._id}
                                data={data}
                            ></SelectedSingleProduct>
                        )
                    }
                </div>
            </div>

        </div>
    );
};

export default SelectedProduct;