import { useState } from "react";
import './SingleSpecialData.css'

const SingleSpecialData = ({ data }) => {
    const [imgIndex, setImgIndex] = useState(0)

    return (
        <div className='grid grid-cols-2 main-Single-specialDiv'>
            <div className="w-72">
                <img  className=' w-full h-80 img' src={data?.images[imgIndex]} alt="" />

                <div className='flex justify-center'>
                    {
                        data.images.map((image, i) =>
                            <img onMouseOver={() => setImgIndex(i)} className={`w-16 h-16 mx-2 ${imgIndex === i ? "activee" : "diActivee"}`} src={image} alt="" />
                        )
                    }
                </div>
            </div>

            <div>
                <h3 className="font-bold text-lg"> {data?.title} </h3>
                <div className="mt-4">
                    <p className="text-justify">description :: {data?.description}</p>
                    <p className="mt-2">price :: <span className="text-red-600 font-semibold">{data?.price}</span> $/=</p>
                    <p>quantity :: {data?.quantity}</p>
                    <p>uploaded date :: {data?.upload_date}</p>
                    <p>brand :: {data?.brand}</p>
                    <p>material :: {data?.material}</p>
                    <p>Gender :: {data.gender}</p>
                </div>
            </div>
        </div>
    );
};

export default SingleSpecialData;