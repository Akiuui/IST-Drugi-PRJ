import entityMap from "../../../Shared/entityMap.js";

export function validateRequestBody(req, res, next) {
    if (['POST', 'PUT'].includes(req.method)) {
        if (!req.body || Object.keys(req.body).length === 0) {
            return res.status(400).json({ error: "Request body is required" });
        }
    }
    next();
}

export function validateType(req, res, next) {
    
    const { type } = req.params;

    if (!(type in entityMap)) {
        return res.status(400).json({ error: "Type is not correct" });
    }

    // req.schemaObj = entityMap[type];

    next();

}