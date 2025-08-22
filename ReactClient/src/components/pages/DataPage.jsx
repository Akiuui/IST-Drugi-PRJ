import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from "axios"

import { Container} from '@mui/material'

import DynamicInputForm from '../organisms/DynamicInputForm.jsx'
import AlertDialog from "../atoms/AlertDialog.jsx"

import {addItemDb, getItemByIdDb} from "../../services/dbActions.js"


function DataPage({DataClass, schema}) {

    const { id } = useParams()
    const navigate = useNavigate()

    const [initialData, setInitialData] = useState({})
    const [showAlert, setShowAlert] = useState(false)

    useEffect(() => {
    
      async function LoadInitalData(id){

        const data = await getItemByIdDb(id)
        // console.log("Inital data: ",data)
        setInitialData(data)

      }

      LoadInitalData(id)
    
    }, [])

    async function onSubmitForm(formData){

      // let instance = new DataClass()
      // instance.FormConstructor({id, formData})

      //Saving logic-----------------
      
      formdata["_id"] = id
      const res = await axios.post(`http://localhost:3000/${DataClass.getName()}/create`, formData)

      // await addItemDb(instance, "films")

      //Saving logic-----------------

      setShowAlert(true)
    }

    const handleCloseAlert = () => {
      setShowAlert(false);
      navigate("/admin")
    };

  return (
    <Container sx={{ height: 'calc(100vh - 64px)'}}>

      <DynamicInputForm initialData={initialData} schema={schema} onSubmitFunc={onSubmitForm}/>

      <AlertDialog open={showAlert} onClose={handleCloseAlert} message="Uspesno ste sacuvali novi film" subject={"Uspeh"}/>
       
    </Container>
  )
}

export default DataPage