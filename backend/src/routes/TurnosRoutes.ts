import { Router } from "express";
import turnosController from "../controller/TurnosController";

const router = Router();

router.post("/", turnosController.create);
router.get("/", turnosController.findAll);
router.get("/:turnoId", turnosController.findOne);
router.put("/:turnoId", turnosController.update);
router.delete("/:turnoId", turnosController.destroy);

export default router;