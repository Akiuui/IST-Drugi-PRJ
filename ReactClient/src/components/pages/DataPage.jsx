
import { Container} from '@mui/material'

import DynamicInputForm from '../organisms/DynamicInputForm.jsx'
import AlertDialog from "../atoms/AlertDialog.jsx"

import useDataPageController from "../../hooks/useDataPageController.js"


function DataPage({Class}) {

    const {schema, model:DataClass} = Class

    const {
      
      initialData,
      onSubmitForm,
      showAlert,
      alertMessage,
      alertHeader,
      handleCloseAlert,

    } = useDataPageController(DataClass);

  return (
    <Container sx={{bgcolor: 'secondary.main'}} /*sx={{ height: 'calc(100vh - 64px)'}}*/>

      <DynamicInputForm initialData={initialData} schema={schema} onSubmitFunc={onSubmitForm}/>

      <AlertDialog open={showAlert} onClose={handleCloseAlert} message={alertMessage} subject={alertHeader}/>
       
    </Container>
  )
}

export default DataPage