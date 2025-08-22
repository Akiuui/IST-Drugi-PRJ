import express from "express"

import RezervacijaSchema from "../../../Shared/schemas/RezervacijaSchema.js"

import GetFromDb from "../controllers/GetFromDb.js"
import SaveToDb from "../controllers/saveToDb.js"

const routerRezervacija = express.Router()

const map = {
    "rezervacija": {
        "name" : "rezervacija",
        "schema": RezervacijaSchema,
    },
}

routerRezervacija.get("/get/:type", async (req, res) => {

    const type = req.params.type;
    
    if(!(type in map)){
        res.status(400).json({"error": "Type is not correct"})
    }
    
    const obj = map[type]

    try {
        const allData = await GetFromDb(obj["name"], obj["schema"])
        
        res.status(200).json(allData)

    } catch (error) {
        res.status(400).json({"error": error})
    }    

})

routerRezervacija.post("/create/:type", async (req, res) => {

    const body = req.body
    const type = req.params.type;

    if(!(type in map)){
        res.status(400).json({"error": "Type is not correct"})
    }
    
    const obj = map[type]

    try{
        
        const saved = await SaveToDb(obj["schema"], obj["name"], body)

        res.status(200).json(saved)

    }catch(err){

        res.status(400).json({ error: err.message });
    
    }

})

routerRezervacija.get("/delete", (req, res) => {
    
})

export default routerRezervacija