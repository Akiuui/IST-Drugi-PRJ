import { useParams, useNavigate } from 'react-router-dom'

import GetDifferentKeys from '../utils/GetDifferentKeys.js'

import {addItemDb, getItemByIdDb, patchItemInDb} from "../services/dbActions.js"

import { useState, useEffect } from 'react'

function useDataPageController(DataClass) {

    const { id } = useParams()
    const navigate = useNavigate()
    
    const [initialData, setInitialData] = useState({})

    const [alertMessage, setAlertMessage] = useState("Uspesno ste sacuvali novi film")
    const [alertHeader, setAlertHeader] = useState("Uspeh")
    const [showAlert, setShowAlert] = useState(false)


    useEffect(() => {
    
        async function LoadInitalData(){
            if(id){
                const {data} = await getItemByIdDb(DataClass.getName(),id)
          
                setInitialData(data)
            }
        }
  
        LoadInitalData()
      
    }, [id])

    async function PatchToDb(initialData, formData){

        let keys = GetDifferentKeys(initialData, formData)
        
        const filteredKeys = keys.filter(key => key !== '__v');

        let newFormValues = {}

        filteredKeys.forEach((key) => {
            newFormValues[key] = formData[key]
        })

        if(Object.keys(newFormValues).length == 0){
            setAlertMessage("Nije napravljena nikakva izmena")
            return
        }

        patchItemInDb(DataClass.getName(), id, newFormValues)
    }

    async function CreateToDb(formData){
    
        const res = await addItemDb(DataClass.getName(), formData)
    
        if(res.status == 400){
            setAlertHeader("Greska")
            setAlertMessage("Doslo je do greska, pokusajte ponovo")
    
        }
    
    }

    async function onSubmitForm(formData){

        formData["_id"] = id
        //Saving logic-----------------
  
        if(initialData){
          PatchToDb(initialData,formData)
        }else{
          CreateToDb(formData)
        }
  
        //Saving logic-----------------
  
        setShowAlert(true)
    }
    
    const handleCloseAlert = () => {
        setShowAlert(false);
        navigate(`/admin/${DataClass.getName()}`)
    };

    return {
        initialData,
        onSubmitForm,
        showAlert,
        alertMessage,
        alertHeader,
        handleCloseAlert,
    };

}

export default useDataPageController