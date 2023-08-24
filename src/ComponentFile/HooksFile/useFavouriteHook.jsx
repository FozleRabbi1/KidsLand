import axios from "axios";
import useFavouriteProduct from "./useFavouriteProduct";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthContextProvider";

const useFavouriteHook = (favouriteData) => {
    const { user } = useContext(AuthContext)
    console.log(user)
    //=========================>>>>> this function ont working ,,,, this is just testing purpose

    const { data: favouriteProducts = [], refetch: favaouriteRefatch, isLoading } = useQuery({
        queryKey: ['favouriteProducts', favouriteData, user?.email],
        queryFn: async () => {
            const response = await axios.post(`https://kids-land-server-two.vercel.app/favouriteProducts?email=${user?.email}`, favouriteData);
            return response.data;
        }
    })

    return [favouriteProducts, favaouriteRefatch, isLoading]
    // https://kids-land-server-two.vercel.app/favouriteProducts
    // axios.post("https://kids-land-server-two.vercel.app/favouriteProducts", favProduct)
    //     .then(data => {
    //         console.log(data)
    //         if (data.data.acknowledged) {
    //         }
    //     })
    // return [];
};

export default useFavouriteHook;