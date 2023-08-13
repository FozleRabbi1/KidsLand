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
        enabled: !!user?.email && !!localStorage.getItem("access-token"),
        queryFn: async () => {
            const response = await axiosSecure(`/favouriteProducts?email=${user?.email}`);
            return response.data;
        }
    })

    return [favouriteProducts, favaouriteRefatch, isLoading]
};

export default useFavouriteProduct;
