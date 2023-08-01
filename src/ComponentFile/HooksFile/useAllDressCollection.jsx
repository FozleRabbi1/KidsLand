import { useQuery } from '@tanstack/react-query';

const useAllDressCollection = (getDataObj,selectedOption ) => {

    console.log( selectedOption)
    // console.log( getDataObj?.value[0])
    // console.log( getDataObj?.value[1])
    const { data: datas = [], refetch, isLoading } = useQuery({
        queryKey: ['allDressCollection', getDataObj.itemOffset, getDataObj.endOffset, getDataObj?.value],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/allDressCollection?itemOffset=${getDataObj.itemOffset}&endOffset=${getDataObj.endOffset}&selectedOption=${selectedOption}`)
            // const res = await fetch(`http://localhost:5000/allDressCollection?itemOffset=${getDataObj.itemOffset}&endOffset=${getDataObj.endOffset}&rangeStart=${getDataObj.value[0]}&rangeEnd=${getDataObj.value[1]}`)
                return res.json();
            },
        })
        console.log(datas)
        return [datas.result, datas?.productLength, refetch, isLoading];

};

export default useAllDressCollection;