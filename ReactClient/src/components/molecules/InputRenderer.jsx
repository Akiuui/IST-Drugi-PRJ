import LabelCheckbox from "../atoms/LabelCheckbox"
import { TextField } from "@mui/material"
import ImageInput from "./ImageInput"

const blockInvalidChars = (e) => {
    const invalid = ["e","E","+","-", ",", "."]

    if(invalid.includes(e.key))
        e.preventDefault();
}


const inputMap = {
        checkbox: ({ele, handleChange, formValues}) => (
            <LabelCheckbox
                name={ele.name}
                label={ele.label}
                checked={formValues[ele.name] || false}
                onChange={handleChange}
                fullWidth
            />),
        Number: ({ele, handleChange, formValues}) => (
            <TextField
                name={ele.name}
                label={ele.label}
                type="number"
                required={ele.required}
                value={formValues[ele.name] || ""}
                onChange={handleChange}
                onKeyDown={(e) => blockInvalidChars(e)}
                slotProps={{
                    htmlInput: {
                        min: ele["min"],
                        max: ele["max"]
                    }
                }}
                fullWidth
            />),
        String: ({ele, handleChange, formValues}) => (
            <TextField
                name={ele.name}
                label={ele.label}
                type="text"
                required={ele.required}
                value={formValues[ele.name] || ""}
                onChange={handleChange}
                fullWidth
            />),
        image: ({ele, handleChange, formValues}) => (
            <ImageInput
                name={ele.name}
                label={ele.label}
                required={ele.required}
                value={formValues[ele.name] || null}
                onChange={handleChange}
            />
        )
        
    }

function InputRenderer({ ele, handleChange, formValues }) {

    const ComponentToRender = inputMap[ele.type];
    
    if (!ComponentToRender) {
        console.warn(`No component found for input type: ${ele.type}`);
        return null;
    }

    return (
        <div>
            {ComponentToRender({ ele, handleChange, formValues })}
        </div>
    );
}

export default InputRenderer