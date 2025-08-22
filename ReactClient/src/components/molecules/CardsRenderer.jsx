import MyCard from "../atoms/MyCard"
import { generateBody, generateHeader, getImageUrlFromFile } from "../../utils/GenerateUI"

function CardsRenderer({data, schema}) {

  return (
    <>
    {
      data?.map(ele => {  
        const id = ele.getId()
        const bodyText = generateBody(schema, ele)
        const headerText = generateHeader(schema, ele)
        const image = getImageUrlFromFile(ele.slika)

        return <MyCard key={id} header={headerText} body={bodyText} img={image}/>
      })
    }
    </>
  )
}

export default CardsRenderer