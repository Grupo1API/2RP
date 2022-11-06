import { Router } from "express";
import centroDeResultadosController from "../controller/CentroDeResultadosController";

const router = Router();

router.post("/", centroDeResultadosController.create);
router.get("/", centroDeResultadosController.findAll);
router.get("/:centroDeResultadoId", centroDeResultadosController.findOne);
router.put("/:centroDeResultadoId", centroDeResultadosController.update);
router.delete("/:centroDeResultadoId", centroDeResultadosController.destroy);

export default router;