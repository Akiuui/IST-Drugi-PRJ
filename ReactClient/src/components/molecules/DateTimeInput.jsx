import { useState, useEffect } from 'react';

import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';

function DateTimeInput({ele, handleChange, formValues, required}) {

    const [data, setData] = useState(null)

    useEffect(() => {
        formValues = formValues || null

        if(formValues!=null){
            formValues = dayjs(formValues)
        }

        setData(formValues || null)

    }, [formValues])

    const handleDataInput = (e) => {

        const synteticEvent = {
            target: {
                name: ele["name"],
                type: ele["type"],
                value: e["$d"]

            }
        }

        setData(e)
        handleChange(synteticEvent)
    }
    

    return(
        <>
            <LocalizationProvider dateAdapter={AdapterDayjs}>

                <DateTimePicker
                    name={ele["name"]}
                    label={ele["label"]}
                    slotProps={{
                        textField: {
                        required: required,
                        }
                    }}
                    onChange={handleDataInput}
                    value={data}
                />

            </LocalizationProvider>
        
        </>
    )


}

export default DateTimeInput