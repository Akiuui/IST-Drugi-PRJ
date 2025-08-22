import { useState, useEffect } from "react"

function useDynamicForm({initialData, schema}) {

    const [formValues, setFormValues] = useState({})

    //When we load we generate default values for the formValues state
    useEffect(() => {

        const initalValues = {}

        schema.forEach(ele => {

            if(initialData && initialData.hasOwnProperty(ele.name)){

                initalValues[ele.name] = initialData[ele.name]

            } else {
                
                switch (ele.type){
                    case "checkbox":
                        initalValues[ele.name] = false
                        break
                    case "image":
                        initalValues[ele.name] = null
                        break
                    default:
                        initalValues[ele.name] = ""
                        break

                }
            }

        });
        
        setFormValues(initalValues)
        
    }, [schema, initialData])


    const handleChange = async (e) => {
        const {name, type, checked, value, files} = e.target

        let valueType

        switch(type){
            case "checkbox":
                valueType = checked
            break;
            case "file":
                valueType = files?.[0] || null
            break;
            default:
                valueType = value
            break;
        }

        setFormValues(prev => ({
            ...prev,
            [name]: valueType
        }))

    }


    return {formValues, handleChange}


}

export default useDynamicForm