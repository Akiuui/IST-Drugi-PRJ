import express from "express"
import dotenv from "dotenv"
import cors from "cors"
//Routers
import routerVozilo from "./src/routes/voziloRoute.js"
import routerRezervacija from "./src/routes/rezervacijaRoute.js"
import routerZakupac from "./src/routes/zakupacRoute.js"
//DB
import { connectToDb } from "./src/services/DbActions.js"

const app = express()
const port = process.env.PORT || 3000
dotenv.config()
app.use(express.json());
// app.use(cors)

app.use("/", routerRezervacija)
// app.use("/vozilo", routerVozilo)
// app.use("/zakupac", routerZakupac)

connectToDb()
    .then(() => {

        app.listen(port, () => {
            console.log(`Server started on port: ${port}`)
        })

    })




