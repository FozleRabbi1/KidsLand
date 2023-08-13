import React from 'react';
import useFavouriteProduct from '../../HooksFile/useFavouriteProduct';
import SingleFavProduct from './SingleFavProduct';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const SeeAllLikedProduct = () => {
    const [favouriteProducts, favaouriteRefatch] = useFavouriteProduct();
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div>
            <h2 className='text-center text-2xl font-bold text-color py-10'> All liked product <sub><small className=''>{favouriteProducts?.length}</small></sub> </h2>

            <div className='pb-10' >

                {
                    favouriteProducts != 0 ?
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
                        : <h2 className='text-center text-red-500 py-16 text-3xl font-bold italic'> Liked Data Not Available </h2>
                }

            </div>


        </div>
    );
};

export default SeeAllLikedProduct;