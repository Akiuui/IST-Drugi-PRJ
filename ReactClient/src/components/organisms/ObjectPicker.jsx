import TableView from "./TableView.jsx"
import useFetchData from "../../hooks/useFetchData.js"
import entityMap from "../../../../Shared/entityMap.js"
import { useEffect, useState } from "react"
import { Typography } from "@mui/material"

function ObjectPicker({ele, handleChange, formValues, required = false }) {

    const objName = ele["name"]
    const objLabel = ele["label"]
    const objSchema = entityMap[objName]["schema"]
    const objModel = entityMap[objName]["model"]

    const {data, isLoading} = useFetchData(objModel)
    const [inputData, setInputData ]= useState("")
    const [selectedRows, setSelectedRows] = useState({type: 'include', ids: new Set()})

    useEffect(() => {
        setSelectedRows({type: 'include', ids: new Set([formValues])})
        setInputData(formValues || "")
    }, [formValues])

    const RestrictChangeSelection = (e) => {
        const data = [...e.ids]

        if(data.length == 1 || data.length == 0){
            setSelectedRows(e)

            const syntheticEvent = {
                target: {
                    name: objName,
                    value: data[0],
                    type: "object"
                }
            };

            handleChange(syntheticEvent)
            setInputData(syntheticEvent.target.value || "")
        }
    }

    return (
        <>
            <Typography>Odaberite {objLabel}{required?"*":""}:</Typography>
            <TableView
                DataSchema={objSchema}
                data={data}
                checkboxSelection={true}
                selectedRows={selectedRows} 
                handleSelectionChange={RestrictChangeSelection}
                isLoading={isLoading}
            />
            <input className="visuallyHidden" type="text" value={inputData} onChange={(e) => setInputData(e.target.value)} required={required}/>
        </>
)
    
}

export default ObjectPicker