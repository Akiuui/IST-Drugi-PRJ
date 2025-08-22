import GetMongoModel from "../utils/GetMongoModel.js"

async function SaveToDb(schema, schemaName, body) {

    const Model = GetMongoModel(schemaName, schema)

    const modelObj = new Model(body)

    return await modelObj.save()

}

export default SaveToDb