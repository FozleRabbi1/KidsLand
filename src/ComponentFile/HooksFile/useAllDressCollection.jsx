import { useQuery } from '@tanstack/react-query';

const useAllDressCollection = (getDataObj, selectedOption, value, selectedOption2) => {

    console.log(selectedOption2)
    // console.log(value[1])
    // console.log( getDataObj?.value[0])
    // console.log( getDataObj?.value[1])
    const { data: datas = [], refetch, isLoading } = useQuery({
        queryKey: ['allDressCollection', getDataObj.itemOffset, getDataObj.endOffset, value, selectedOption, selectedOption2],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/allDressCollection?itemOffset=${getDataObj.itemOffset}&endOffset=${getDataObj.endOffset}&selectedOption=${selectedOption}&lowRangeValue=${value[0]}&highRangeValue=${value[1]}&ascenDescen=${selectedOption2}`)
            // const res = await fetch(`http://localhost:5000/allDressCollection?itemOffset=${getDataObj.itemOffset}&endOffset=${getDataObj.endOffset}&rangeStart=${getDataObj.value[0]}&rangeEnd=${getDataObj.value[1]}`)
            return res.json();
        },
    })
    // console.log(datas)
    return [datas.result, datas?.productLength, refetch, isLoading];

};

export default useAllDressCollection;