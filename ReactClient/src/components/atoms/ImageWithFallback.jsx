import { Avatar } from "@mui/material"

function ImageWithFallback({image, defaultImage, variant, size}) {

  const variantTypes = [
    "circular",
    "rounded",
    "square"
  ]

  if(variant && !variantTypes.includes(variant))
    throw new Error("The variant of the image doesnt exist")
  
  if(!size){
    size = 39
  }

  return (
    <>
    {
        image ? 
        (
            <Avatar sx={{width: size, height: size}} src={image} variant={variant} alt="image"/>
        )
        :
        (
            <Avatar sx={{width: size, height: size}} src={defaultImage} variant={variant} alt="default Image"/>
        )
    }
    </>
  )
}

export default ImageWithFallback