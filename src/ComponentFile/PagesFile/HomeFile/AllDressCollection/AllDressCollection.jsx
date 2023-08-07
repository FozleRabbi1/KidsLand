import React, { useEffect } from 'react';
import useAllDressCollection from '../../../HooksFile/useAllDressCollection';
import SingleDress from './SingleDress';
import { useState } from 'react';
import "./AllDressCollection.css"
import 'react-loading-skeleton/dist/skeleton.css'
import SkeletonCard from './SkeletonCard';
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import useFavouriteProduct from '../../../HooksFile/useFavouriteProduct';
import { GiSelfLove } from 'react-icons/gi';
import ShowMoreWithModal from './ShowMoreWithModal/ShowMoreWithModal';
import { FaRegHandPointLeft } from "react-icons/fa";
import { AiOutlineCloseSquare } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const AllDressCollection = () => {
    const [getData, setGetData] = useState({})
    const [value, setValue] = useState([0, 150]);
    const [selectedOption, setSelectedOption] = useState("All")
    const [selectedOption2, setSelectedOption2] = useState("ascending ")
    const [datas, productLength, refetch, isLoading] = useAllDressCollection(getData, selectedOption, value, selectedOption2);
    const [productNumber, setProductNumber] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);
    const [favouriteProducts, favaouriteRefatch] = useFavouriteProduct();
    const [product, setProduct] = useState(null);

    // console.log(product)

    useEffect(() => {
        refetch()
    }, [getData, selectedOption, value, productLength, selectedOption2])


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

    const handleOptionChange2 = (e) => {
        setSelectedOption2(e.target.value)
    }

    return (
        <div className='mt-16'>
            <h2 className='text-center text-2xl font-bold text-color pb-10'>All Cullection</h2>
            <div className='flex'>
                <div className="conterol-div w-2/12 pe-3">
                    <h2 className='text-center mb-4 text-color text-xl font-bold'>control panel</h2>
                    <div className='my-2'>
                        <h2>Total Product = <span className='font-semibold' >{productNumber}</span> </h2>
                        <h2>Find Product = <span className='font-semibold' >{productLength}</span> </h2>
                        <h2>Show Product =
                            {datas?.length === 0 ?
                                <span className='text-red-500 text-xl font-bold'>{datas?.length}</span>
                                :
                                <span className='font-semibold' >{datas?.length}</span>} / page</h2>
                    </div>

                    <div>
                        <RangeSlider min={0} max={150} step={5} onInput={setValue} />
                        <div className='flex justify-between mt-2'>
                            <span> {value[0]} $</span>
                            <span> --- </span>
                            <span>{value[1]} $</span>
                        </div>
                    </div>

                    <div className='flex justify-between mt-2'>
                        <select
                            value={selectedOption}
                            onChange={handleOptionChange}
                            className="bg-green-400  mt-2 button rounded  text-gray-800"
                        >
                            <option className='ms-2' value="All">All</option>
                            <option className='ms-2' value="Boy">Boy</option>
                            <option className='ms-2' value="Girl">Girl</option>
                        </select>

                        <select
                            // value={selectedOption2}
                            onChange={handleOptionChange2}
                            className="bg-green-400  mt-2 button rounded  text-gray-800"
                        >
                            <option className='ms-2' value="ascending ">Low to high</option>
                            <option className='ms-2' value="descending ">High to low</option>
                        </select>
                    </div>
                    <div className='mt-2'>
                        <i className="flex items-center">Favourite : <span className='font-bold text-xl ms-2'>{favouriteProducts?.length || 0}</span>
                            <GiSelfLove className="text-xl text-red-600 ms-2 " ></GiSelfLove>
                            <Link className="border w-4/12 text-center rounded mx-auto mb-1 hover:bg-gray-700 hover:text-white duration-500" to={"/seeAll"}>See All</Link>
                        </i>
                    </div>
                </div>
                <div className=' w-10/12'>
                    {
                        isLoading ? <div className='all-dress-mainDiv grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 '><SkeletonCard cards={itemsPerPage}></SkeletonCard></div> :
                            <div>
                                {
                                    datas?.length === 0 ?
                                        <div className='text-red-500 text-center my-44 text-3xl font-semibold'>
                                            {
                                                productLength === 0 ? <>
                                                    <p>No data Found, Please Send Valid Requist</p>
                                                  <i className='flex justify-center'>  <AiOutlineCloseSquare className='text-6xl'></AiOutlineCloseSquare></i>
                                                </> : <>
                                                    <p>No More Data Back to <span className='text-red-700 font-bold italic'>Previous</span> Page</p>
                                                    <i className='flex justify-center'> <FaRegHandPointLeft className='text-6xl '></FaRegHandPointLeft></i>
                                                </>
                                            }
                                        </div> :
                                        <div className="all-dress-mainDiv grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
                                            {
                                                datas?.map(data =>
                                                    <SingleDress
                                                        key={data._id}
                                                        data={data}
                                                        setProduct={setProduct}
                                                    ></SingleDress>
                                                )
                                            }
                                        </div>
                                }
                            </div>
                    }
                    <ul className='flex gap-10 mx-auto w-6/12 justify-center my-10'>
                        {
                            pageNumber && pageNumber?.map(pageNum =>
                                <li onMouseUp={() => getDataFun(pageNum)} onClick={() => setCurrentPage(pageNum)} className={`${pageNum === currentPage ? "active-pagination " : ""} border cursor-pointer bg-gray-300 px-2`} key={pageNum}> {pageNum + 1} </li>
                            )
                        }
                    </ul>
                </div>
            </div>

            {
                product && <ShowMoreWithModal product={product} setProduct={setProduct}></ShowMoreWithModal>
            }
            
        </div>
    );
};

export default AllDressCollection;