import { useEffect } from "react";
import useAllDressCollection from "../../../HooksFile/useAllDressCollection";
import { useState } from "react";
import TopTenSingleProduct from "./TopTenSingleProduct";

const TopTenProducts = () => {
    const [topDatas, setTopTenDatas] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/topTenProducts")
            .then(res => res.json())
            .then(data => setTopTenDatas(data))
    }, [])


    return (
        <div>
            <h2 className='text-center text-4xl font-bold text-color pb-10'>Top 10 Product's  <small className='text-sm'>(TODO)</small> </h2>


            <div className="grid grid-cols-4 gap-10 -z-10 pb-10">
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