import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../AuthProvider/AuthContextProvider';
import useAxiosSecure from './useAxiosSecure';
import { useContext } from 'react';

const useAddtoCard = (data) => {
    const { user } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();

    const { data : responsee, refetch : addtoCardRefatch } = useQuery({
        queryKey: ['addToCard', user?.email, data],
        enabled: !!user?.email && !!localStorage.getItem("access-token") && !!data,
        queryFn: async () => {
            const res = await axiosSecure.post(`/addToCard`, data)
            return res.data;
        },
    })
    return [responsee, addtoCardRefatch];

};

export default useAddtoCard;