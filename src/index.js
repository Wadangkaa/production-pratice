import dotenv from "dotenv"
import connectDatabase from "./db/connection.js"

dotenv.config({
    path: "./env",
})

connectDatabase()
