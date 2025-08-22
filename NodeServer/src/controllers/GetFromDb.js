import GetMongoModel from "../utils/GetMongoModel.js"

async function GetFromDb(schemaName, schema) {

    const Model = GetMongoModel(schemaName, schema)

    
    return await Model.find({})
}

export default GetFromDb