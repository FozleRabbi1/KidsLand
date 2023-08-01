import React, { useEffect } from 'react';
import useAllDressCollection from '../../../HooksFile/useAllDressCollection';
import SingleDress from './SingleDress';
import { useState } from 'react';
import "./AllDressCollection.css"
import 'react-loading-skeleton/dist/skeleton.css'
import SkeletonCard from './SkeletonCard';
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';


const AllDressCollection = () => {
    const [getData, setGetData] = useState({})
    const [value, setValue] = useState([30, 60]);
    const [selectedOption, setSelectedOption] = useState("All")
    const [datas, productLength, refetch, isLoading] = useAllDressCollection(getData, selectedOption);
    const [productNumber, setProductNumber] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);

    useEffect(() => {
        refetch()
    }, [getData, selectedOption])


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
        const getDataObj = { itemOffset, endOffset, }
        setGetData(getDataObj)
    }

    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value)
    }

    return (
        <div className='mt-16'>
            <h2 className='text-center text-2xl font-bold text-color pb-10'>All Cullection</h2>
            <div className='flex'>
                <div className="conterol-div w-2/12 px-2">
                    <h2 className='text-center mb-4 text-color text-xl font-bold'>control panel</h2>
                    <div className='my-2'>
                        <h2>total Product = {productLength}</h2>
                        <h2 >total Product = {datas?.length} / page</h2>
                    </div>

                    <div>
                        <RangeSlider min={0} max={120} step={5} onInput={setValue} />
                        <div className='flex justify-between mt-2'>
                            <span> {value[0]} $</span>
                            <span> --- </span>
                            <span>{value[1]} $</span>
                        </div>
                    </div>

                    <select
                        value={selectedOption}
                        onChange={handleOptionChange}
                        className="bg-green-400  mt-2 button rounded  text-gray-800"
                    >
                        <option className='ms-2' value="All">All</option>
                        <option className='ms-2' value="Boy">Boy</option>
                        <option className='ms-2' value="Girl">Girl</option>
                    </select>



                </div>
                <div className=' w-10/12'>
                    {
                        isLoading || datas.length === 0 ? <div className='all-dress-mainDiv grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 '><SkeletonCard cards={itemsPerPage}></SkeletonCard></div> :
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


                </div>
            </div>
        </div>
    );
};

export default AllDressCollection;