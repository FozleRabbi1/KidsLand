import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthContextProvider";
import useAxiosSecure from "../useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useAllUsers = () => {
    const {user} = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();

    const {data : userData = [], refetch : userRefetch} = useQuery({
        queryKey : [user?.email],
        enabled : !!user?.email && !!localStorage.getItem("access-token"),
        queryFn : async ()=> {
            const response = await axiosSecure("https://kids-land-server-two.vercel.app/allUsers");
            return response.data

        }
    })


    return {userData, userRefetch};


};

export default useAllUsers;