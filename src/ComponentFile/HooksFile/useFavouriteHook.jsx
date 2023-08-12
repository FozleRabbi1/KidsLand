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
            const response = await axios.post(`http://localhost:5000/favouriteProducts?email=${user?.email}`, favouriteData);
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