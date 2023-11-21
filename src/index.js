import dotenv from "dotenv"
import connectDatabase from "./db/connection.js"
import app from "./app.js"

dotenv.config({
    path: "./env",
})

connectDatabase()
    .then(() => {
        const port = process.env.port
        app.listen(port, () => {
            console.log(`server listenning at: ${port}`)
        })
    })
    .catch((error) => {
        console.log("database connection failed in index.js file", error)
    })
