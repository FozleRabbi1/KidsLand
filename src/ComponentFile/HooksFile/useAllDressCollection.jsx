import { useQuery } from '@tanstack/react-query';

const useAllDressCollection = () => {
    const { data: datas = [], refetch, isLoading } = useQuery({
        queryKey: ['allDressCollection'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/allDressCollection`)
            return res.json();
        },
    })

    return [datas, refetch, isLoading];
};

export default useAllDressCollection;