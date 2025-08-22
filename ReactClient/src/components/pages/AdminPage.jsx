import { useState, useEffect } from "react";
import { Container, Box } from "@mui/material"
import TableView from "../organisms/TableView"
import AdminActions from "../molecules/AdminActions.jsx"
import useAdminController from "../../hooks/useAdminController.js"
import AlertDialog from "../atoms/AlertDialog.jsx"
import useFetchData from "../../hooks/useFetchData.js";


function AdminPage({DataClass, schema}) {

  const data = useFetchData(DataClass)
  const {error, clearError, handleAdd, handleUpdate, handleRemove} = useAdminController()
  const [selectedRows, setSelectedRows] = useState({ type: 'include', ids: new Set() });

  const handleSelectionChange = (newSelection) => {
    console.log(newSelection)
    setSelectedRows(newSelection)
  }

  return (
 
    <Container sx={{bgcolor: 'secondary.main', height: 'calc(100vh - 64px)', padding:"16px", display: "flex", flexDirection: "column"}}>
        
      <AdminActions 
        selectedIds={Array.from(selectedRows["ids"])} 
        onAdd={handleAdd} 
        onUpdate={handleUpdate}
        onDelete={handleRemove}
      />      

      <Box sx={{flexGrow: 1, margin: 2}}>
       <TableView 
          DataSchema={schema} 
          data={data} 
          selectedRows={selectedRows} 
          handleSelectionChange={handleSelectionChange}
          checkboxSelection={true}
          orderBy={"name"}
        />
      </Box>

      <AlertDialog open={error} onClose={clearError} message={error?.msg} subject={"Problem"}/>
    </Container>


  )
  
  
  
  
}

export default AdminPage
