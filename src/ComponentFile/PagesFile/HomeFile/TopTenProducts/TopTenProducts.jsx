import { useEffect } from "react";
import useAllDressCollection from "../../../HooksFile/useAllDressCollection";
import { useState } from "react";
import TopTenSingleProduct from "./TopTenSingleProduct";

const TopTenProducts = () => {
    const [topDatas, setTopTenDatas] = useState([]);

    useEffect(() => {
        fetch("https://kids-land-server-two.vercel.app/topTenProducts")
            .then(res => res.json())
            .then(data => setTopTenDatas(data))
    }, [])


    return (
        <div>
            <h2 data-aos="flip-up" className='main-headline-bg-style text-center text-xl md:text-3xl font-bold '>Top 10 Selling Products  <small className='text-sm'>(TODO)</small> </h2>


            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-10 justify-center -z-10 pb-10">
                {
                    topDatas?.map(data =>
                        <TopTenSingleProduct key={data._id} data={data}></TopTenSingleProduct>
                    )
                }
            </div>

        </div>
    );
};

export default TopTenProducts;