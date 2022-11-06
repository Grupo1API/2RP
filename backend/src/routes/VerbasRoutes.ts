import { Router } from "express";
import verbasController from "../controller/VerbasController";

const router = Router();

router.post("/", verbasController.create);
router.get("/", verbasController.findAll);
router.get("/:verbaId", verbasController.findOne);
router.put("/:verbaId", verbasController.update);
router.delete("/:verbaId", verbasController.destroy);

export default router;
