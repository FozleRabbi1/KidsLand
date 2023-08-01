import axios from "axios";
import useFavouriteProduct from "./useFavouriteProduct";
import { useState } from "react";

const useFavouriteHook = (favProduct) => {
    const [favData, setFavData] = useState();
    console.log(favProduct)
    // const [, favaouriteRefatch] = useFavouriteProduct();
    axios.post("http://localhost:5000/favouriteProducts", favProduct)
        .then(data => {
            console.log(data)
            if (data.data.acknowledged) {
                favaouriteRefatch()
            }
        })
    return [];
};

export default useFavouriteHook;