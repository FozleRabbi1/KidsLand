import React from 'react';
import useFavouriteProduct from '../../HooksFile/useFavouriteProduct';
import SingleFavProduct from './SingleFavProduct';

const SeeAllLikedProduct = () => {
    const [favouriteProducts, favaouriteRefatch] = useFavouriteProduct();

    return (
        <div>
            <h2 className='text-center text-2xl font-bold text-color py-10'> All liked product </h2>

            <div className='' >
                <div className=''>
                    {
                        favouriteProducts?.map(favProduct =>
                            <SingleFavProduct
                                key={favProduct._id}
                                data={favProduct}
                            ></SingleFavProduct>
                        )
                    }
                </div>
            </div>


        </div>
    );
};

export default SeeAllLikedProduct;