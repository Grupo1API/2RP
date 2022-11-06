import { Router } from "express";
import apontamentoHorasController from "../controller/ApontamentoHorasController";

const router = Router();

router.post("/", apontamentoHorasController.create);
router.get("/", apontamentoHorasController.findAll);
router.get("/:apontamentoHoraId", apontamentoHorasController.findOne);
router.put("/:apontamentoHoraId", apontamentoHorasController.update);
router.delete("/:apontamentoHoraId", apontamentoHorasController.destroy);

export default router;
