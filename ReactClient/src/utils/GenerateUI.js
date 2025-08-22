import FilteredSchemaByProperty from "./FilteredSchemaByProperty.js"

export function generateBody(schema, dataClass) {
    let bodyText = "";

    for (let e of FilteredSchemaByProperty(schema, "body")) {
      bodyText += `${e.label}: ${dataClass[e.name]}\n`;
    }
    
    return bodyText;
}

export function generateHeader(schema, dataClass) {
    let headerText = "";
    for (let e of FilteredSchemaByProperty(schema, "header")) {
      headerText += `${dataClass[e.name]}\n`;
    }
    return headerText;
  }
  
export function getImageUrlFromFile(imageFile){

  if(imageFile instanceof File)
    return URL.createObjectURL(imageFile)
  else
    return imageFile

}