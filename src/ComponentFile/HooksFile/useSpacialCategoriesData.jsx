import { useQuery } from "@tanstack/react-query";

const useSpacialCategoriesData = (selectedOption) => {
    // console.log(selectedOption.toLowerCase())
    const { data: datas = [], refetch, isLoading } = useQuery({
        queryKey: ['specialDats', selectedOption],
        queryFn: async () => {
            const res = await fetch(`https://kids-land-server-two.vercel.app/specialDats/${selectedOption.toLowerCase()}`)
            return res.json();
        },
    })

    return [datas, refetch, isLoading];
};

export default useSpacialCategoriesData;
