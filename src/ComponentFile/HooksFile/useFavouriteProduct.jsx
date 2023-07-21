import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useFavouriteProduct = () => {

    const { data: favouriteProducts = [], refetch : favaouriteRefatch , isLoading} = useQuery({
        queryKey: ['favouriteProducts'],
        queryFn: async () => {
            const response = await axios("http://localhost:5000/favouriteProducts");
            return response.data;
        }
    })

    return [favouriteProducts, favaouriteRefatch, isLoading]
};

export default useFavouriteProduct;
