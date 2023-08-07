import { useEffect, useState } from "react";
import './ShowMoreWithModal.css'
import ReactImageMagnify from 'react-image-magnify';
import { toast } from "react-toastify";

const ShowMoreWithModal = ({ product, setProduct }) => {
    const [imageIndex, setImageIndex] = useState(0);
    const [size, setSize] = useState("");
    const [counetr, setCounter] = useState(1);
    const [totalPrice, setTotalPrice] = useState(0);
    const [warningText, setWarningText] = useState("");


    useEffect(() => {
        const price = product?.price * counetr
        setTotalPrice(price)
    }, [counetr])


    const allCutFunction = () => {
        setTotalPrice(0);
        setWarningText("");
        setCounter(1);
        setImageIndex(0);
    }


    const Increase = () => {
        if (counetr >= 10) {
            return
        }
        if (product?.quantity <= counetr) {
            setWarningText("Opps! Product Not Available")
            setTimeout(() => {
                setWarningText("");
            }, 3000);
            return
        }
        setCounter(counetr + 1)
    }

    const decrease = () => {
        if (counetr <= 1) {
            return
        }
        setCounter(counetr - 1)
        setWarningText("")
    }

    return (
        <div>
            <dialog id="show_more_with_modal" className="modal">
                <form method="dialog" className="modal-box w-11/12 max-w-5xl relative">
                    <div className="grid md:grid-cols-2 justify-center ">
                        <div className="image-div w-full md:w-10/12">

                            <img className="image w-full h-[400px] " src={product.images[imageIndex]} alt="" />
 
                            <div className="img-div flex justify-center">
                                {
                                    product?.images.map((image, index) =>
                                        <img src={image} onClick={() => setImageIndex(index)} className={`${imageIndex === index ? "addStyle" : "removeStyle"} w-20 h-20 m-1`} alt="" />
                                    )
                                }
                            </div>

                        </div>

                        <div className="text-div">

                            <h3 className="font-bold text-lg"> {product?.title} </h3>
                            <div className="mt-4">
                                <p className="text-justify">description :: {product?.description}</p>
                                <p className="mt-2">price :: <span className="text-red-600 font-semibold">{product?.price}</span> $/=</p>
                                <p>quantity :: {product?.quantity}</p>
                                <p>uploaded date :: {product?.upload_date}</p>
                                <p>brand :: {product?.brand}</p>
                                <p>material :: {product?.material}</p>
                            </div>

                            <div>
                                <p className="flex items-center">Size ::
                                    <small onClick={() => setSize("XS")} className="mx-2 cursor-pointer bg-green-200 rounded-2xl block w-6 h-6 text-center" >XS</small>
                                    <small onClick={() => setSize("S")} className="mx-1 cursor-pointer bg-green-200 rounded-2xl block w-6 h-6 text-center" >S</small>
                                    <small onClick={() => setSize("MD")} className="mx-1 cursor-pointer bg-green-200 rounded-2xl block w-6 h-6 text-center" >MD</small>
                                    <small onClick={() => setSize("LG")} className="mx-1 cursor-pointer bg-green-200 rounded-2xl block w-6 h-6 text-center" >LG</small>
                                    <small onClick={() => setSize("XL")} className="mx-1 cursor-pointer bg-green-200 rounded-2xl block w-6 h-6 text-center" >XL</small>
                                    <small onClick={() => setSize("2XL")} className="mx-1 cursor-pointer bg-green-200 rounded-2xl block w-6 h-6 text-center" >2XL</small>
                                </p>
                            </div>

                            <div className="flex items-center mt-4 ">

                                <div className="flex w-4/12 justify-between">
                                    <div onClick={decrease} className="w-10 h-10 text-2xl bg-slate-100 flex items-center justify-center cursor-pointer">-</div>
                                    <div className="w-10 h-10 text-2xl bg-slate-100 flex items-center justify-center cursor-pointer"> {counetr} </div>
                                    <div onClick={Increase} className="w-10 h-10 text-2xl bg-slate-100 flex items-center justify-center cursor-pointer"> + </div>
                                </div>

                                {/* <h2 className=" ms-8"> Price :: <span className="text-red-600 text-xl font-bold">{totalPrice || product?.price} $</span> </h2> */}
                                <h2 className=" ms-8"> Price :: <span className="text-red-600 text-xl font-bold">{totalPrice === 0 ? product?.price : totalPrice } $</span> </h2>

                            </div>
                            {
                                warningText && <p className="bg-yellow-200 text-red-500 w-5/12 text-center rounded-full mt-1 text-xs font-bold">{warningText}</p>
                            }


                        </div>

                    </div>
                    <div onClick={() => allCutFunction()} className=" absolute z-30 top-3 right-3  flex justify-center items-center">
                        <button className="bg-green-300 rounded-full w-10 h-10 font-bold hover:text-red-500 duration-500 text-xl">X</button>
                    </div>
                </form>
            </dialog>

        </div>
    );
};

export default ShowMoreWithModal;