import { Router } from "express"
import ContactRouter from "./contact"

const router = Router({ mergeParams: true })

router.use("/sample", ContactRouter)

export default router
