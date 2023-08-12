import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { AuthContext } from "../AuthProvider/AuthContextProvider";
import { useContext } from "react";
import useAxiosSecure from "./useAxiosSecure";

const useFavouriteProduct = () => {
    const { user } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();

    const { data: favouriteProducts = [], refetch: favaouriteRefatch, isLoading } = useQuery({
        queryKey: ['favouriteProducts', user?.email],
        queryFn: async () => {
            const response = await axiosSecure(`http://localhost:5000/favouriteProducts?email=${user?.email}`);
            return response.data;
        }
    })

    return [favouriteProducts, favaouriteRefatch, isLoading]
};

export default useFavouriteProduct;
