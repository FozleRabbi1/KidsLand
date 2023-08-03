import { useEffect, useState } from "react";
import './ShowMoreWithModal.css'
import ReactImageMagnify from 'react-image-magnify';

const ShowMoreWithModal = ({ product, setProduct }) => {
    const [imageIndex, setImageIndex] = useState(0);
    const [size, setSize] = useState("");
    const [counetr, setCounter] = useState(1);
    const [totalPrice, setTotalPrice] = useState(0);

    console.log(totalPrice)

    useEffect(()=>{
        setTotalPrice(product?.price * counetr)
    },[, counetr])

    const Increase = () => {
        if (counetr >= 5) {
            return
        }
        setCounter(counetr + 1)
        
    }
    const decrease = () => {
        console.log(counetr)
        if (counetr <= 1) {
            return
        }
        setCounter(counetr - 1)
    }

    return (
        <div>
            <dialog id="show_more_with_modal" className="modal">
                <form method="dialog" className="modal-box w-11/12 max-w-5xl relative">
                    <div className="grid md:grid-cols-2 justify-center ">
                        <div className="image-div w-full md:w-10/12">

                            <img className="image w-full h-[400px] " src={product.images[imageIndex]} alt="" />
                            {/* <div>
                                <ReactImageMagnify className="w-72" {...{
                                    smallImage: {
                                        alt: 'Wristwatch by Ted Baker London',
                                        isFluidWidth: true,
                                        src: `${product.images[imageIndex]}`,
                                       
                                    },
                                    largeImage: {
                                        src: `${product.images[imageIndex]}`,
                                        width: 1000,
                                        height: 1200,
                                    },
                                    // enlargedImagePosition: "over"
                                }} />
                            </div> */}

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
                                <p className="mt-2">price :: {product?.price} $/=</p>
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

                                <h2 className=" ms-8"> total Price :: <span className="text-red-600 text-xl font-bold">{totalPrice || product?.price} $</span> </h2>
                            </div>


                        </div>

                    </div>
                    <div onClick={()=>setTotalPrice(0)} onMouseUp={()=>setCounter(1)} onMouseDown={()=>setQuantity(0)} className=" absolute z-30 top-3 right-3  flex justify-center items-center">
                        <button onClick={() => setImageIndex(0)} className="bg-green-300 rounded-full w-10 h-10 font-bold hover:text-red-500 duration-500 text-xl">X</button>
                    </div>
                </form>
            </dialog>

        </div>
    );
};

export default ShowMoreWithModal;