import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthContextProvider";
import useAxiosSecure from "./useAxiosSecure";

const useAddtoCardGetData = () => {
    const { user } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();

    const { data: addToCardData = [], refetch: refatch, isLoading } = useQuery({
        queryKey: ['addToCard', user?.email],
        enabled: !!user?.email && !!localStorage.getItem("access-token"),
        queryFn: async () => {
            const response = await axiosSecure(`/addToCard?email=${user?.email}`);
            return response.data;
        }
    })

    return [addToCardData, refatch, isLoading]
};

export default useAddtoCardGetData;
