import express from "express"
import dotenv from "dotenv"
import cors from "cors"
//Routers
import genericRouter from "./src/routes/GenericRoute.js"
//DB
import { connectToDb } from "./src/services/DbActions.js"

const app = express()
const port = process.env.PORT || 3000

dotenv.config()
app.use(express.json());
app.use(cors())

app.use("/", genericRouter)

connectToDb()
    .then(() => {

        app.listen(port, () => {
            console.log(`Server started on port: ${port}`)
        })

    })




