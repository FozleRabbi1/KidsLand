import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';

const useAllDressCollection = (getDataObj) => {

    console.log(getDataObj)
    // useEffect(() => {
    const { data: datas = [], refetch, isLoading } = useQuery({
        queryKey: ['allDressCollection', getDataObj.itemOffset, getDataObj.endOffset],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/allDressCollection?itemOffset=${getDataObj.itemOffset}&endOffset=${getDataObj.endOffset}`)
                return res.json();
            },
        })
        // console.log(datas)
        return [datas, refetch, isLoading];
    // }, [getDataObj])

};

export default useAllDressCollection;