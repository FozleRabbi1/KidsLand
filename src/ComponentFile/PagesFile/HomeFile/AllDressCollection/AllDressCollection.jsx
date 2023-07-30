import React, { useEffect } from 'react';
import useAllDressCollection from '../../../HooksFile/useAllDressCollection';
import SingleDress from './SingleDress';
import { useState } from 'react';
import "./AllDressCollection.css"
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import SkeletonCard from './SkeletonCard';


const AllDressCollection = () => {
    const [getData, setGetData] = useState({})
    const [datas, , isLoading] = useAllDressCollection(getData);
    const [productNumber, setProductNumber] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);

    const itemsPerPage = 12;
    const pageCount = Math.ceil(productNumber / itemsPerPage);
    const pageNumber = [...Array(pageCount).keys()]

    useEffect(() => {
        fetch("http://localhost:5000/allProductNumber")
            .then(res => res.json())
            .then(data => setProductNumber(data))
    }, [])


    const getDataFun = (num) => {
        const itemOffset = num * itemsPerPage
        const endOffset = itemOffset + itemsPerPage;
        const getDataObj = { itemOffset, endOffset }
        setGetData(getDataObj)
    }

    return (
        <div className='mt-16'>
            <h2 className='text-center text-2xl font-bold text-color pb-10'>All Cullection</h2>
            <div className='flex'>
                <div className="conterol-div w-2/12">
                    control div
                </div>
                <div className=' w-10/12'>

                    {
                        isLoading ? <div className='all-dress-mainDiv grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 '><SkeletonCard cards={itemsPerPage}></SkeletonCard></div> :

                            <div className="all-dress-mainDiv grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 ">
                                
                                {
                                    datas?.map(data =>
                                        <SingleDress
                                            key={data._id}
                                            data={data}
                                        ></SingleDress>
                                    )
                                }
                            </div>
                    }

                    <ul className='flex gap-10 mx-auto w-6/12 justify-center my-10'>
                        {
                            pageNumber?.map(pageNum =>
                                <li onMouseUp={() => getDataFun(pageNum)} onClick={() => setCurrentPage(pageNum)} className={`${pageNum === currentPage ? "active-pagination " : ""} border cursor-pointer bg-gray-300 px-2`} key={pageNum}> {pageNum + 1} </li>
                            )
                        }
                    </ul>


                    {/* <div className='bg-red-500 flex justify-center'>
                        <div className="join bg-green-500">
                            <button className="join-item btn">1</button>
                            <button className="join-item btn">2</button>
                            <button className="join-item btn btn-disabled">...</button>
                            <button className="join-item btn">99</button>
                            <button className="join-item btn">100</button>
                        </div>
                    </div> */}

                </div>
            </div>
        </div>
    );
};

export default AllDressCollection;