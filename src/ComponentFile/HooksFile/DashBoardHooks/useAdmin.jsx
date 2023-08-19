import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthContextProvider";
import useAxiosSecure from "../useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useAdmin = () => {

    const { user } = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure();

    const { data: isAdmin, isLoading: adminLoading } = useQuery({
        queryKey: ['users/admin', user?.email],
        enabled: !!user?.email && !!localStorage.getItem("access-token"),
        queryFn: async () => {
            const res = await axiosSecure(`/users/admin/${user?.email}`)
            return res.data;
        },
    })
    return [isAdmin, adminLoading]
}

export default useAdmin;