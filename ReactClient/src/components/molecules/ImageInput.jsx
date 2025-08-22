import { Box, Button, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import ImageWithFallback from "../atoms/ImageWithFallback.jsx"
import defaultImage from "/defaultImage.png"

function ImageInput({name, label, required, value, onChange}) {

    const [imagePreview, setImagePreview] = useState("")

    useEffect(() => {
    
        if(value){
            setImagePreview(URL.createObjectURL(value))
        }

    }, [value])
    

    const handleImageChange = (e) => {

        const file = e.target.files[0]

        if(file){
            setImagePreview(URL.createObjectURL(file))
        }

    }

    return (

        <Box>
            <Typography sx={{marginBottom: 1}}>
                {label}
            </Typography>

            <Box sx={{display: "flex", gap:4}}>
                <Button
                    component="label"
                    variant="contained"    
                >
                    <input
                        className="visuallyHidden"
                        // value={value}
                        name={name}
                        required={required}
                        onChange={(e) => {
                            onChange(e)
                            handleImageChange(e)
                        }}
                        type="file"
                        accept="image/*"
                    />
                    
                    Select Image
                
                </Button>

                <ImageWithFallback size={50} image={imagePreview} defaultImage={defaultImage} variant="rounded"/>
            </Box>

        </Box>

    )
}

export default ImageInput