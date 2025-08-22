import mongoose from "mongoose"
import {Schema} from "mongoose"


function GetMongoSchema(schema) {

    let mongooseObject = {}

    schema.forEach(ele => {
        mongooseObject[ele.name] = {
            type: ele.type,
            required: ele.required || false
        }
    });
    
    return new Schema(mongooseObject,  { _id: false })

}

function GetMongoModel(modelName, schema) {

    if (mongoose.models[modelName]) {
        return mongoose.models[modelName];
    }
    
    return mongoose.model(modelName, GetMongoSchema(schema))
}

export default GetMongoModel