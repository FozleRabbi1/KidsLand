import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthContextProvider';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../useAxiosSecure';

const useManager = () => {
    const { user } = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure();

    const { data: isManager, isLoading: managerLoading } = useQuery({
        queryKey: ['users/manager', user?.email],
        enabled: !!user?.email && !!localStorage.getItem("access-token"),
        queryFn: async () => {
            const res = await axiosSecure(`/users/manager/${user?.email}`)
            return res.data;
        },
    })
    return [isManager, managerLoading]
};

export default useManager;