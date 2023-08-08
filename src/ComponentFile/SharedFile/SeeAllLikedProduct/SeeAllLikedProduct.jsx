import React from 'react';
import useFavouriteProduct from '../../HooksFile/useFavouriteProduct';
import SingleFavProduct from './SingleFavProduct';

const SeeAllLikedProduct = () => {
    const [favouriteProducts, favaouriteRefatch] = useFavouriteProduct();

    return (
        <div>
            <h2 className='text-center text-2xl font-bold text-color py-10'> All liked product </h2>

            <div className='' >

                {
                    favouriteProducts != 0 ? <div className=''>
                        {
                            favouriteProducts?.map(favProduct =>
                                <SingleFavProduct
                                    key={favProduct._id}
                                    data={favProduct}
                                ></SingleFavProduct>
                            )
                        }
                    </div>
                        : <h2 className='text-center text-red-500 py-16 text-3xl font-bold italic'> Liked Data Not Available </h2>
                }

            </div>


        </div>
    );
};

export default SeeAllLikedProduct;