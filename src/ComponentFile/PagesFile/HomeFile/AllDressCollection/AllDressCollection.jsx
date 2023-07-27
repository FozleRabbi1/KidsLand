import React from 'react';
import useAllDressCollection from '../../../HooksFile/useAllDressCollection';
import SingleDress from './SingleDress';
import { useState } from 'react';
import ReactPaginate from 'react-paginate';
import "./AllDressCollection.css"

const AllDressCollection = () => {
    const [datas] = useAllDressCollection();

    const [itemOffset, setItemOffset] = useState(0);
    let itemsPerPage = 12;
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    const currentItems = datas.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(datas.length / itemsPerPage);
    

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % datas.length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };

    return (
        <div className='mt-16'>
            <h2 className='text-center text-2xl font-bold text-color pb-10'>All Cullection</h2>


            <div className='flex'>
                <div className="conterol-div w-2/12">
                    control div
                </div>

                <div className=' w-10/12'>
                    <div className="all-dress-mainDiv grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 ">

                        {
                            // datas.slice(0,12)?.map(data =>
                            currentItems.map(data =>
                                <SingleDress
                                    key={data._id}
                                    data={data}
                                ></SingleDress>
                            )
                        }


                    </div>

                    <ReactPaginate
                        nextLabel=">"
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={6}
                        breakLabel="..."
                        pageCount={pageCount}
                        previousLabel="<"
                        renderOnZeroPageCount={null}
                        containerClassName={"pagination"}
                        previousClassName={"page-num"}
                        pageClassName={"page-num"}
                        nextClassName={"page-num"}
                        activeLinkClassName={"activeLink"}
                    />

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