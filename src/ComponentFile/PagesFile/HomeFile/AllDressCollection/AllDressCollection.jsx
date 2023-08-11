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
    const [text, setText] = useState("AllDress")
    const [datas, productLength, refetch, isLoading] = useAllDressCollection(getData, selectedOption, value, selectedOption2, text);
    const [productNumber, setProductNumber] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);
    const [favouriteProducts, favaouriteRefatch] = useFavouriteProduct();
    const [product, setProduct] = useState(null);

    console.log(isLoading, datas?.length)

    useEffect(() => {   
        refetch()
    }, [getData, selectedOption, value, productLength, selectedOption2, text])


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
            <h2 className='text-center text-4xl font-bold text-color pb-10'>All Cullection</h2>
            <div className='flex'>

                <div data-aos="fade-right" data-aos-delay="1000" className="conterol-div w-2/12 pe-3">
                    <h2 className='text-center mb-4 text-color text-xl font-bold'>control panel</h2>
                    <div className='my-2'>
                        <h2 className='flex border-b-2 mb-2'> <span>Total Product =</span> <span className='font-semibold ' >{productNumber}</span> </h2>
                        <h2 className='flex border-b-2 mb-2'> <span>Find Product =</span> <span className='font-semibold ' >{productLength}</span> </h2>

                        <h2 className='flex border-b-2 mb-4'>
                            <span>Show Product =</span>
                            {datas?.length === 0 ?
                                <span className='text-red-500 text-xl font-bold'>{datas?.length}</span>
                                :
                                <span className='font-semibold' >{datas?.length}</span>} / page
                        </h2>

                    </div>

                    <div>
                        <RangeSlider min={0} max={150} step={5} onInput={setValue} />
                        <div className='flex justify-between border-b-2'>
                            <span> {value[0]} $</span>
                            <span> --- </span>
                            <span>{value[1]} $</span>
                        </div>
                    </div>

                    <div className='flex justify-between mt-2 border-b-2 pb-1'>
                        <select
                            value={selectedOption}
                            onChange={handleOptionChange}
                            className="bg-sky-400  mt-2 button rounded  text-gray-800"
                        >
                            <option className='ms-2' value="All">All</option>
                            <option className='ms-2' value="Boy">Boy</option>
                            <option className='ms-2' value="Girl">Girl</option>
                        </select>

                        <select
                            onChange={handleOptionChange2}
                            className="bg-sky-400 mt-2 button rounded  text-gray-800"
                        >
                            <option className='ms-2' value="ascending ">Low to high</option>
                            <option className='ms-2' value="  descending">High to low</option>
                        </select>
                    </div>

                    <div className='mt-2 border-b-2'>
                        <i className="flex items-center">Favourite : <span className='font-bold text-xl ms-2'>{favouriteProducts?.length || 0}</span>
                            <GiSelfLove className="text-xl text-red-600 ms-2 " ></GiSelfLove>
                            <Link className="border w-4/12 text-center rounded mx-auto mb-1 hover:bg-gray-700 hover:text-white duration-500" to={"/seeAll"}>See All</Link>
                        </i>
                    </div>

                    <div className='mt-4'>
                        <span className='flex justify-between my-2 border-b-2 pb-1'>
                            <h2 className='font-bold italic'>Materials </h2>
                            <span className='w-6/12 ps-2 border text-center'>{text}</span>
                        </span>

                        <ul>
                            <li onClick={() => setText("AllDress")} className='border w-6/12 mb-1 text-center cursor-pointer hover:bg-gray-300 duration-500'>All</li>
                            <li onClick={() => setText("Cotton")} className='border w-6/12 mb-1 text-center cursor-pointer hover:bg-gray-300 duration-500'>Cotton</li>
                            <li onClick={() => setText("Polyester")} className='border w-6/12 mb-1 text-center cursor-pointer hover:bg-gray-300 duration-500'>Polyester</li>
                            <li onClick={() => setText("Straw")} className='border w-6/12 mb-1 text-center cursor-pointer hover:bg-gray-300 duration-500'>Straw</li>
                            <li onClick={() => setText("Silk")} className='border w-6/12 mb-1 text-center cursor-pointer hover:bg-gray-300 duration-500'>Silk</li>
                            <li onClick={() => setText("Nylon")} className='border w-6/12 mb-1 text-center cursor-pointer hover:bg-gray-300 duration-500'>Nylon</li>
                            <li onClick={() => setText("Denim")} className='border w-6/12 mb-1 text-center cursor-pointer hover:bg-gray-300 duration-500'>Denim</li>
                            <li onClick={() => setText("Fleece")} className='border w-6/12 mb-1 text-center cursor-pointer hover:bg-gray-300 duration-500'>Fleece</li>
                            <li onClick={() => setText("Spandex")} className='border w-6/12 mb-1 text-center cursor-pointer hover:bg-gray-300 duration-500'>Spandex</li>
                            <li onClick={() => setText("Tulle")} className='border w-6/12 mb-1 text-center cursor-pointer hover:bg-gray-300 duration-500'>Tulle</li>
                            <li onClick={() => setText("Rayon")} className='border w-6/12 mb-1 text-center cursor-pointer hover:bg-gray-300 duration-500'>Rayon</li>
                            <li onClick={() => setText("Spandex")} className='border w-6/12 mb-1 text-center cursor-pointer hover:bg-gray-300 duration-500'>Spandex</li>
                            <li onClick={() => setText("Satin")} className='border w-6/12 mb-1 text-center cursor-pointer hover:bg-gray-300 duration-500'>Satin</li>
                            <li onClick={() => setText("Synthetic")} className='border w-6/12 mb-1 text-center cursor-pointer hover:bg-gray-300 duration-500'>Synthetic</li>
                        </ul>
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
                    <ul className='flex gap-10 mx-auto w-6/12 justify-center my-10 '>
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