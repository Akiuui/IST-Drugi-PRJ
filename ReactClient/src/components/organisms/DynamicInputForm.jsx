import { Button, Box } from '@mui/material'
import InputRenderer from '../molecules/InputRenderer'
import useDynamicForm from "../../hooks/useDynamicForm.js"

function DynamicInputForm({initialData, schema, onSubmitFunc}) {

    const {formValues, handleChange} = useDynamicForm({initialData, schema})
    
    const handleSubmit = (e) => {
        e.preventDefault()

        onSubmitFunc?.(formValues);
    }


    return(
        <Box 
            sx={{height:"100%", padding:2, display:"flex", flexDirection: "column", justifyContent: "space-evenly"}} 
            component="form" 
            onSubmit={handleSubmit}
        >
            {
            schema.map(ele => {
                if("hiddenFromForm" in ele)
                    return

                return (
                    <InputRenderer 
                        key={ele.name}
                        ele={ele} 
                        handleChange={handleChange} 
                        formValues={formValues} 
                    />
                )
            })
            }        

            <Button type="submit" variant="contained">Save</Button>
        
        </Box>
    )
    
}

export default DynamicInputForm