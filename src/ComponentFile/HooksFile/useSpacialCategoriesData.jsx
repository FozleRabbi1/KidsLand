import { useQuery } from "@tanstack/react-query";

const useSpacialCategoriesData = () => {
    const { data: datas = [], refetch, isLoading } = useQuery({
        queryKey: ['specialDats'],
        queryFn: async () => {
            const res = await fetch("http://localhost:5000/specialDats")
            return res.json();
        },
    })

    return [datas, refetch, isLoading];
};

export default useSpacialCategoriesData;