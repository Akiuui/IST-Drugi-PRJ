import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { deleteItemDb} from "../services/dbActions"
import {v4 as uuidv4} from "uuid"

function useAdminController({DataClass,FetchData}) {

    const [error, setError] = useState()

    const navigate = useNavigate()

    const handleAdd = () => {
        
        navigate(`/admin/${DataClass.getName()}/${uuidv4()}`)

    }

    const handleUpdate = async (rowIds) => {

        if(rowIds.length!=1){
            console.log("Greska")
            setError({type: "info", msg:"Nije odabran ni jedan red, ili je odabrano vise od jednog"})
            return
        }
        const id = rowIds[0]

        navigate(`/admin/${DataClass.getName()}/${id}`)

    }

    const handleRemove = async (rowIds) => {

        if(rowIds.length==0){
            console.log("Greska")
            setError({type: "info", msg:"Nije odabran ni jedan red"})
            return
        }

        try{

            await Promise.all(rowIds.map(id => deleteItemDb(DataClass.getName(),id)))
            FetchData()

        }catch(err){
            console.log(err)
        }

        console.log("Brisanje Uspesno")
    }

    function clearError(){
        setError()
    }

    return {
        error,
        clearError,
        handleAdd,
        handleUpdate,
        handleRemove,
    }

}

export default useAdminController