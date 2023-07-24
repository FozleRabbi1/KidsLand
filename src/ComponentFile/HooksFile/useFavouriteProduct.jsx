import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { AuthContext } from "../AuthProvider/AuthContextProvider";
import { useContext } from "react";

const useFavouriteProduct = () => {
    const { user, logInOut } = useContext(AuthContext);

    const { data: favouriteProducts = [], refetch: favaouriteRefatch, isLoading } = useQuery({
        queryKey: ['favouriteProducts', user?.email],
        queryFn: async () => {
            const response = await axios(`http://localhost:5000/favouriteProducts?email=${user?.email}`);
            return response.data;
        }
    })

    return [favouriteProducts, favaouriteRefatch, isLoading]
};

export default useFavouriteProduct;
