import { Router } from "express"
import { ContactController } from "../controllers/contact"
import { ContactValidator } from "../validator/contact"

const router = Router({ mergeParams: true })
const controller = new ContactController()
const validator = new ContactValidator()

router.route("/").get(controller.getAll).post(validator.create, controller.create)
router
    .route("/:id")
    .get(controller.get)
    .patch(validator.update, controller.update)
    .delete(controller.delete)

export default router
