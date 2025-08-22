import { FormControlLabel, Checkbox } from "@mui/material"

function LabelCheckbox({name, label, checked, onChange}) {
  return (

    <FormControlLabel
        control={
        <Checkbox
            name={name}
            checked={checked}
            onChange={onChange}
        />
        }
        label={label}
    />

    )
}

export default LabelCheckbox