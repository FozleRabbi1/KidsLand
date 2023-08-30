import React from 'react';
import useSpacialCategoriesData from '../../HooksFile/useSpacialCategoriesData';
import SingleSpecialData from './SingleSpecialData';

const SpecialCollectionAll = () => {
    const [datas] = useSpacialCategoriesData("All");

    console.log(datas)

    return (
        <div>

            <h2 className='text-color text-center py-5 text-3xl font-bold'> All Special Collection <sub className='local-text'>(todo)</sub> </h2>

            <div className='grid grid-cols-2 gap-10 my-10 justify-center'>
                {
                    datas?.map((data, index) =>
                        <SingleSpecialData data={data} ></SingleSpecialData>
                    )
                }
            </div>


        </div>
    );
};

export default SpecialCollectionAll;