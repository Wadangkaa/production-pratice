import { Router } from "express"
import { registerUser } from "../controllers/userController.js"

const router = Router()

router.get("/", registerUser)

export default router
