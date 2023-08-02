import { useState } from "react";
import './ShowMoreWithModal.css'

const ShowMoreWithModal = ({ product }) => {
    const [imageIndex, setImageIndex] = useState(0);

    return (
        <div>
            <dialog id="show_more_with_modal" className="modal">
                <form method="dialog" className="modal-box w-11/12 max-w-5xl relative">
                    <div className="grid grid-cols-2 ">
                        <div className="image-div w-10/12">
                            <img className="w-full h-[400px] " src={product.images[imageIndex]} alt="" />

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
                    <div className="modal-action absolute bottom-4 right-4">
                        <button onClick={() => setImageIndex(0)} className="btn">X</button>
                    </div>

                </form>
            </dialog>
        </div>
    );
};

export default ShowMoreWithModal;