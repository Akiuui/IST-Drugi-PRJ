import GetMongoModel from "../utils/GetMongoModel.js";
import entityMap from "../../../Shared/entityMap.js";

export function createMongoModel(req, res, next) {

    const { type } = req.params;

    const data = entityMap[type]

    req.schemaObj = GetMongoModel(data["name"], data["schema"]);

    next();

}