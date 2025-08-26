import {getItemAllDb} from "../services/dbActions.js"
import { useEffect, useState } from "react"

function useFetchData(DataClass) {

    const [data, setData] = useState()
    const [isLoading, setIsLoading] = useState(true)

    async function FetchData(){

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

      setData(fetchedDataArray)
      setIsLoading(false)
    }

    useEffect(() => {
        
        FetchData()
      
    }, [])

    return {data, FetchData, isLoading}
}

export default useFetchData