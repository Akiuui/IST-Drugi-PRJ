import { Container, Box } from "@mui/material"
import TableView from "../organisms/TableView"
import useFetchData from "../../hooks/useFetchData.js"
import CardsRenderer from "../molecules/CardsRenderer.jsx"
import SortByNumberKey from "../../utils/SortByNumberKey.js"
import { useEffect, useState } from "react"

function ClientPage({DataClass, schema}) {

  const data = useFetchData(DataClass)
  const [editedData, setEditedData] = useState()

  useEffect(() => {
    
    if(!data)
      return

    const sortedArray = SortByNumberKey(data, "ocena", false)

    setEditedData(sortedArray.splice(0,3))

  }, [data])
  
  return (<>

    <Container sx={{color: 'secondary.main', height: "100vh"}}>

      <Box sx={{flexGrow: 1, margin: 2}}>
        <TableView
            DataSchema={schema}
            data={data}
        />
      </Box>
      
      <CardsRenderer data={editedData} schema={schema}/>

    </Container>

  </>)
}

export default ClientPage
