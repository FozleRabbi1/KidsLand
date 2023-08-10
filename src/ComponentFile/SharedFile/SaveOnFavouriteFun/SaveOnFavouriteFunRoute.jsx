
   
//==============================>>>>> this function ont working ,,,, this is just testing purpose


    
// import axios from "axios"
// import Swal from "sweetalert2"
// import useFavouriteProduct from "../../HooksFile/useFavouriteProduct";
// import { AuthContext } from "../../AuthProvider/AuthContextProvider";

// const [favouriteProducts, favaouriteRefatch] = useFavouriteProduct();
// const { user } = useContext(AuthContext);

// const SaveOnFavouriteFun = (product, imageUrl) => {
//     // const [favouriteProducts, favaouriteRefatch] = useFavouriteProduct();
//     // const { user } = useContext(AuthContext);
//     console.log(product, imageUrl)

//     const { _id, images, ...rest } = product
//     const productData = { mainId: _id, ...rest, imageUrl: imageUrl, email: user?.email, favourite: true }
//     if (!user) {
//         Swal.fire({
//             title: 'Login First',
//             icon: 'warning',
//             showCancelButton: true,
//             confirmButtonColor: '#3085d6',
//             cancelButtonColor: '#d33',
//             confirmButtonText: 'Go to login page',
//         }).then((result) => {
//             // setLoading(false)
//             if (result.isConfirmed) {
//                 navigate("/login")
//                 // setLoading(false)
//             }
//         })
//         return
//     }

//     if (favouriteProducts.length >= 5) {
//         toast.warn("You Can't Save More Then 5 Product", {
//             position: "top-center",
//             autoClose: 5000,
//             hideProgressBar: false,
//             closeOnClick: true,
//             pauseOnHover: true,
//             draggable: true,
//             progress: undefined,
//             theme: "dark",
//         });
//         return
//     }

//     axios.post("http://localhost:5000/favouriteProducts", productData)
//         .then(data => {
//             if (data.data.exist) {
//                 setLoading(false)
//                 toast.warn(`${data.data.message}`, {
//                     position: "top-center",
//                     autoClose: 5000,
//                     hideProgressBar: false,
//                     closeOnClick: true,
//                     pauseOnHover: true,
//                     draggable: true,
//                     progress: undefined,
//                     theme: "dark",
//                 });
//                 return
//             }
//             if (data.data.acknowledged) {
//                 setLoading(false)
//                 favaouriteRefatch()
//                 return []
//             }
//         })

// }

// export default SaveOnFavouriteFun;


