import { useState } from "react";
import './ShowMoreWithModal.css'
import ReactImageMagnify from 'react-image-magnify';

const ShowMoreWithModal = ({ product, setProduct }) => {
    const [imageIndex, setImageIndex] = useState(0);

    return (
        <div>
            <dialog id="show_more_with_modal" className="modal">
                <form method="dialog" className="modal-box w-11/12 max-w-5xl relative">
                    <div className="grid md:grid-cols-2 justify-center ">
                        <div className="image-div w-full md:w-10/12">

                            <img className="w-full h-[400px] " src={product.images[imageIndex]} alt="" />
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
                        </div>
                    </div>
                    <div className=" absolute z-30 top-3 right-3  flex justify-center items-center">
                        <button  onClick={() => setImageIndex(0)} className="bg-green-300 rounded-full w-10 h-10 font-bold hover:text-red-500 duration-500 text-xl">X</button>
                    </div>
                </form>
            </dialog>

        </div>
    );
};

export default ShowMoreWithModal;