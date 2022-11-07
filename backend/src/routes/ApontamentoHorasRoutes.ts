import { Router } from "express";
import apontamentoHorasController from "../controller/ApontamentoHorasController";

const router = Router();

router.post("/", apontamentoHorasController.create);
router.get("/", apontamentoHorasController.findAll);
router.get("/:apontamentoHoraId", apontamentoHorasController.findOne);
router.put("/:apontamentoHoraId", apontamentoHorasController.update);
router.delete("/:apontamentoHoraId", apontamentoHorasController.destroy);
router.delete("/aprovar/:apontamentoHoraId", apontamentoHorasController.aprovarHora);
router.delete("/reprovar/:apontamentoHoraId", apontamentoHorasController.reprovarHora);

export default router;
