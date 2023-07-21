import { useQuery } from "@tanstack/react-query";

const useSpacialCategoriesData = (selectedOption) => {
    // console.log(selectedOption.toLowerCase())
    const { data: datas = [], refetch, isLoading } = useQuery({
        queryKey: ['specialDats'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/specialDats/${selectedOption.toLowerCase()}`)
            return res.json();
        },
    })

    return [datas, refetch, isLoading];
};

export default useSpacialCategoriesData;
