import {getItemAllDb} from "../services/dbActions.js"
import { useEffect, useState } from "react"

function useFetchData(DataClass) {

    const [data, setData] = useState()

    useEffect(() => {

        async function FetchData(){

          const fetchedData = await getItemAllDb()

          let fetchedDataArray = []
          fetchedData.map(ele => {
            const instance = new DataClass()
            instance.DbConstructor(ele)
  
            fetchedDataArray.push(instance)
          });

          setData(fetchedDataArray)
        }
        
        FetchData()
      
    }, [])

    return data
}

export default useFetchData