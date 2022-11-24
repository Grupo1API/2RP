import { Router } from "express";
import turnosController from "../controller/TurnosController";
import sessao from "../middlewares/sessao";

const router = Router();

router.post("/", sessao, turnosController.create);
router.get("/", sessao, turnosController.findAll);
router.get("/:turnoId", sessao, turnosController.findOne);
router.put("/:turnoId", sessao, turnosController.update);
router.delete("/:turnoId", sessao, turnosController.destroy);

export default router;
