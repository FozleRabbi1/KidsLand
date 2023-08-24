import { useEffect, useState } from "react";
import './SingleSpecialData.css'
import { Link } from "react-router-dom";

const SingleSpecialData = ({ data }) => {
    const [imgIndex, setImgIndex] = useState(0)

    // useEffect(() => {
        setTimeout(() => {
            if (imgIndex >= data.images?.length - 1) {
                console.log(imgIndex)
                setImgIndex(0)
                return
            }
            setImgIndex(imgIndex + 1)
        }, 3000);
    // }, [])


    return (
        <div className='grid grid-cols-2 main-Single-specialDiv'>
            <div className="w-72">
                <img className=' w-full h-80 img' src={data?.images[imgIndex]} alt="" />

                <div className='flex justify-center'>
                    {
                        data.images.map((image, i) =>
                            <img className={`w-16 h-16 mx-2 ${imgIndex === i ? "activee" : "diActivee"}`} src={image} alt="" />
                            // <img onMouseOver={() => setImgIndex(i)} className={`w-16 h-16 mx-2 ${imgIndex === i ? "activee" : "diActivee"}`} src={image} alt="" />
                        )
                    }
                </div>
            </div>

            <div className="">
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

                <Link to={`/spacialDetails/${data?._id}`} className="text-center bg-gray-400 px-2 py-1 block mt-1 w-5/12 rounded-3xl shadow-lg font-semibold italic"> show deatails </Link>
            </div>
        </div>
    );
};

export default SingleSpecialData;