import RezervacijaSchema from "./schemas/RezervacijaSchema.js"
import VoziloSchema from "./schemas/VoziloSchema.js"
import ZakupacSchema from "./schemas/ZakupacSchema.js"

import RezervacijaModel from "./models/RezervacijaModel.js"
import VoziloModel from "./models/VoziloModel.js"
import ZakupacModel from "./models/ZakupacModel.js"

const entityMap = {
    "rezervacija": {
        "name" : "rezervacija",
        "schema": RezervacijaSchema,
        "model": RezervacijaModel
    },
    "vozilo": {
        "name" : "vozilo",
        "schema": VoziloSchema,
        "model": VoziloModel
    },
    "zakupac": {
        "name" : "zakupac",
        "schema": ZakupacSchema,
        "model": ZakupacModel
    }
}


export default entityMap