import express from "express"

import { deleteById, getAll, getById, save, updateById} from "../controllers/GenericController.js"

import {validateType, validateRequestBody} from "../middleware/validation.js"

import { createMongoModel } from "../middleware/formatting.js"

const genericRouter = express.Router()


genericRouter.get("/get/:type/:id", validateType, createMongoModel, async (req, res) => {

    const obj = req.schemaObj
    const id = req.params.id;

    try {
        const data = await getById(obj, id)
        
        res.status(200).json(data)

    } catch (error) {
        res.status(400).json({"error": error})
    }    

})


genericRouter.get("/get/:type",validateType, createMongoModel, async (req, res) => {

    const obj = req.schemaObj
    

    try {
        const allData = await getAll(obj)
        
        res.status(200).json(allData)

    } catch (error) {
        res.status(400).json({"error": error})
    }    

})

genericRouter.post("/create/:type", validateType, createMongoModel, validateRequestBody, async (req, res) => {

    console.log("Recieved a request")
    const body = req.body
    const obj = req.schemaObj

    try{
        console.log(body)
        const saved = await save(obj, body)

        res.status(200).json(saved)

    }catch(err){

        res.status(400).json({ error: err.message });
    
    }

})

genericRouter.delete("/delete/:type", validateType, createMongoModel, async (req, res) => {

    const obj = req.schemaObj

    try {
        await obj.collection.drop();
        
        res.status(200).json({"Message": "Succesfully delete the whole Db"})

    } catch (error) {
        res.status(400).json({"error": error})
    }  
})

genericRouter.delete("/delete/:type/:id", validateType, createMongoModel, async (req, res) => {

    const id = req.params.id;
    const obj = req.schemaObj

    try {
        
        await deleteById(obj, id)

        res.status(200).json({"Message": "Succesfully deleted the selected id element"})

    } catch (error) {
        res.status(400).json({"error": error})
    }  
})

genericRouter.patch("/update/:type/:id", validateType, createMongoModel, validateRequestBody, async (req, res) => {

    const id = req.params.id
    const obj = req.schemaObj
    const updateData = req.body;

    try {
        const updated = await updateById(obj, id, updateData);

        if (!updated) {
            return res.status(404).json({ error: "Document not found" });
        }

        res.status(200).json(updated);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }

})

export default genericRouter