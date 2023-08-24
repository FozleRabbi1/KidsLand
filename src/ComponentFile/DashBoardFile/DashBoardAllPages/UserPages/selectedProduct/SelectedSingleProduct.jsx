import { useState } from 'react';
import './SelectedSingleProduct.css';
import { useEffect } from 'react';
import axios from 'axios';
import useAddtoCardGetData from '../../../../HooksFile/useAddtoCardGetData';

const SelectedSingleProduct = ({ data }) => {
    const [size, setSize] = useState("");
    const [presentAmount, setPersentAmount] = useState(0);
    const [productCount, setProductCount] = useState(1);
    const [, refatch] = useAddtoCardGetData();
    const [loading, setLoading] = useState(false);

    useEffect(() => {

        setPersentAmount(data.price * (10 / 100))


    }, [])

    const selectedProductDeleteFun = (id) => {
        setLoading(true)
        axios.delete(`https://kids-land-server-two.vercel.app/addToCard/${id}`)
            .then(() => {
                refatch();
                setLoading(false)
            })
    }


    return (
        <div>

            <div className='flex items-center justify-between p-5'>
                <button onClick={() => selectedProductDeleteFun(data?._id)} className=' w-6 h-6 rounded-full font-bold hover:text-red-500 duration-500 flex justify-center items-center'> {loading ? <span className="loading loading-spinner loading-xs"></span> : "X"}</button>

                <img className='w-32 h-32' src={data.imageUrl} alt="" />

                <div className='flex flex-col'>

                    <span>{data.brand}</span>
                    <span>quantity : {data.quantity}</span>
                    <span>{data.special ? " S" : ""}</span>

                </div>
                <div>
                    <div className="flex items-center">
                        {/* <span className="font-semibold"> Size</span> :: */}
                        <p className="grid grid-cols-3 justify-center items-center gap-2 text-left">
                            <small onClick={() => setSize("XS")} className="cursor-pointer bg-green-200 rounded-2xl block w-6 h-6 text-center" >XS</small>
                            <small onClick={() => setSize("S")} className="cursor-pointer bg-green-200 rounded-2xl block w-6 h-6 text-center" >S</small>
                            <small onClick={() => setSize("MD")} className="cursor-pointer bg-green-200 rounded-2xl block w-6 h-6 text-center" >MD</small>
                            <small onClick={() => setSize("LG")} className="cursor-pointer bg-green-200 rounded-2xl block w-6 h-6 text-center" >LG</small>
                            <small onClick={() => setSize("XL")} className="cursor-pointer bg-green-200 rounded-2xl block w-6 h-6 text-center" >XL</small>
                            <small onClick={() => setSize("2XL")} className="cursor-pointer bg-green-200 rounded-2xl block w-6 h-6 text-center" >2XL</small>
                        </p>

                        {
                            // size && <p className='bg-slate-300 ms-5 rounded-full px-1 w-6 h-6 flex text-center items-center  pt-0 font-semibold text-sm'>{size}</p>
                            size ? <p className='bg-slate-300 ms-5 rounded-full h-6 w-6 flex justify-center items-center p-2 '>{size}</p> : <p className='ms-5 h-6 w-6'></p>
                        }
                    </div>
                </div>

                <div className='flex flex-col justify-center items-center'>

                    <span>$ {data.price}</span>
                    <span> - <span className='line-through text-gray-500'>{presentAmount}</span> </span>
                    <span>$ {data?.price - presentAmount}</span>

                </div>

                <div className='bg-gray-100 w-2/12 flex justify-between p-1'>
                    <span className='w-6 h-6 bg-gray-200 flex justify-center items-center font-bold hover:bg-gray-400 hover:text-red-600 text-2xl duration-500  cursor-pointer'>-</span>
                    <span className='w-6 h-6 bg-gray-200 flex justify-center items-center font-bold hover:bg-gray-300 duration-500 '>{productCount}</span>
                    <span className='w-6 h-6 bg-gray-200 flex justify-center items-center font-bold hover:bg-gray-400 hover:text-red-600 text-2xl duration-500 cursor-pointer '>+</span>
                </div>
            </div>
        </div>
    );
};

export default SelectedSingleProduct;