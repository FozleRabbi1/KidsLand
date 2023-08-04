import React from 'react';

const SingleFavProduct = ({ data }) => {
    return (
        <div className='my-2'>

            <div className='flex bg-green-100 justify-between px-4 items-center'>
                <img className='w-44 h-44' src={data.imageUrl} alt="" />

                <div>
                    <p className="">price :: <span className="text-red-600 font-semibold">{data?.price}</span> $/=</p>
                    <p>quantity :: {data?.quantity}</p>
                    <p>uploaded date :: {data?.upload_date}</p>
                </div>

                <div>
                    <p>brand :: {data?.brand}</p>
                    <p>material :: {data?.material}</p>
                </div>

            </div>

        </div>
    );
};

export default SingleFavProduct;