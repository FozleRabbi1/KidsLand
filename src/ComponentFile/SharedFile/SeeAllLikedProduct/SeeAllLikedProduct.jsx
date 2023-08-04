import React from 'react';
import useFavouriteProduct from '../../HooksFile/useFavouriteProduct';
import SingleFavProduct from './SingleFavProduct';

const SeeAllLikedProduct = () => {
    const [favouriteProducts, favaouriteRefatch] = useFavouriteProduct();

    return (
        <div>
            <h2> All liked product </h2>

            <div className='flex' >
                <div className='flex-1'>
                    {
                        favouriteProducts?.map(favProduct =>
                            <SingleFavProduct
                                key={favProduct._id}
                                data={favProduct}
                            ></SingleFavProduct>
                        )
                    }
                </div>
                <div className='w-3/12'>
                    control
                </div>
            </div>


        </div>
    );
};

export default SeeAllLikedProduct;