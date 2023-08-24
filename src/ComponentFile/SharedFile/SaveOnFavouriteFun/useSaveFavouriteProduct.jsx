import Swal from 'sweetalert2';
import useFavouriteProduct from '../../HooksFile/useFavouriteProduct';
import { AuthContext } from '../../AuthProvider/AuthContextProvider';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useContext } from 'react';
import { useState } from 'react';

//==============================>>>>> this function ont working ,,,, this is just testing purpose


const useSaveFavouriteProduct = ({ product, imageUrl, click }) => {
    const [favouriteProducts, favaouriteRefatch] = useFavouriteProduct();
    const { user } = useContext(AuthContext);
    const [loading, setLoading] = useState(false);

    if (click === "click") {
        console.log(" 14 === ", product, imageUrl, click)
    }

    // const { _id, images, ...rest } = product
    // const productData = { mainId: _id, ...rest, imageUrl: imageUrl, email: user?.email, favourite: true }
    // if (!user) {
    //     Swal.fire({
    //         title: 'Login First',
    //         icon: 'warning',
    //         showCancelButton: true,
    //         confirmButtonColor: '#3085d6',
    //         cancelButtonColor: '#d33',
    //         confirmButtonText: 'Go to login page',
    //     }).then((result) => {
    //         // setLoading(false)
    //         if (result.isConfirmed) {
    //             navigate("/login")
    //             // setLoading(false)
    //         }
    //     })
    //     return
    // }

    // if (favouriteProducts.length >= 5) {
    //     toast.warn("You Can't Save More Then 5 Product", {
    //         position: "top-center",
    //         autoClose: 5000,
    //         hideProgressBar: false,
    //         closeOnClick: true,
    //         pauseOnHover: true,
    //         draggable: true,
    //         progress: undefined,
    //         theme: "dark",
    //     });
    //     return
    // }

    // axios.post("https://kids-land-server-two.vercel.app/favouriteProducts", productData)
    //     .then(data => {
    //         if (data.data.exist) {
    //             setLoading(false)
    //             toast.warn(`${data.data.message}`, {
    //                 position: "top-center",
    //                 autoClose: 5000,
    //                 hideProgressBar: false,
    //                 closeOnClick: true,
    //                 pauseOnHover: true,
    //                 draggable: true,
    //                 progress: undefined,
    //                 theme: "dark",
    //             });
    //             return
    //         }
    //         if (data.data.acknowledged) {
    //             setLoading(false)
    //             favaouriteRefatch()
    //             // return []
    //         }
    //     })

    return [loading];
};

export default useSaveFavouriteProduct;