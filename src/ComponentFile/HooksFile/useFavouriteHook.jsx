import axios from "axios";
import useFavouriteProduct from "./useFavouriteProduct";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

const useFavouriteHook = (favouriteData) => {
   
    console.log(favouriteData)
    const { data: favouriteProducts = [], refetch: favaouriteRefatch, isLoading } = useQuery({
        queryKey: ['favouriteProducts', favouriteData],
        queryFn: async () => {
            const response = await axios.post(`http://localhost:5000/favouriteProducts`, favouriteData);
            return response.data;
        }
    })

    return [favouriteProducts, favaouriteRefatch, isLoading]
    // http://localhost:5000/favouriteProducts
    // axios.post("http://localhost:5000/favouriteProducts", favProduct)
    //     .then(data => {
    //         console.log(data)
    //         if (data.data.acknowledged) {
    //         }
    //     })
    // return [];
};

export default useFavouriteHook;