import {getItemAllDb} from "../services/dbActions.js"
import { useEffect, useState } from "react"

const dataCache = new Map()

function useFetchData(DataClass, useCache = false) {
    const name = DataClass.getName();


    const [data, setData] = useState(() => useCache ? dataCache.get(name) || [] : [])
    const [isLoading, setIsLoading] = useState(!useCache || !dataCache.has(key))

    async function FetchData(){

      if(useCache && dataCache.has(name)){
        setData(dataCache.get(name))
        setIsLoading(false);
        return
      }

      setIsLoading(true)

      let fetchedData = {}
      
      try{

        fetchedData = await getItemAllDb(DataClass.getName())

        fetchedData = fetchedData["data"]          

      }catch(err){
        console.log(err)
      }

      let fetchedDataArray = []

      fetchedData.map(ele => {
        const instance = new DataClass()
        instance.DbConstructor(ele)

        fetchedDataArray.push(instance)
      });

      dataCache.set(name, fetchedData)
      setData(fetchedDataArray)
      setIsLoading(false)
    }

    useEffect(() => {
        
        FetchData()
        console.log(useCache ? "Using cache if available" : "Fetching fresh data");
      
    }, [useCache])

    return {data, FetchData, isLoading}
}

export default useFetchData