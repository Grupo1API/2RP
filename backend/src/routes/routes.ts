import { Router } from "express";
import ClassificacaoHorasController from "../controller/ClassificacaoHorasController";

const router = Router();

// Classificação horas
router.post("/classificacaoHoras", ClassificacaoHorasController.create);
router.get("/classificacaoHoras", ClassificacaoHorasController.findAll);
router.get(
  "/classificacaoHoras/:classificacaoHorasId",
  ClassificacaoHorasController.findOne
);
router.put(
  "/classificacaoHoras/:classificacaoHorasId",
  ClassificacaoHorasController.update
);
router.delete(
  "/classificacaoHoras/:classificacaoHorasId",
  ClassificacaoHorasController.destroy
);

export { router };
