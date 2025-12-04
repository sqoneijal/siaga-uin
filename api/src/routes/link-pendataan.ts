import { Router } from "express";
import { linkPendataanController } from "../controllers/link-pendataan";
import { validate } from "../middlewares/validate.middleware";
import { updateSchemas } from "../schemas/link-pendataan";

const router = Router();

router.get("/:id", linkPendataanController.findById);
router.put("/:id", validate(updateSchemas), linkPendataanController.update);
export default router;
