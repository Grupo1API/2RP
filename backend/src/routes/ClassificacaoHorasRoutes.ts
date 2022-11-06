import { Router } from "express";
import classificacaoHorasController from "../controller/ClassificacaoHorasController";

const router = Router();

router.post("/", classificacaoHorasController.create);
router.get("/", classificacaoHorasController.findAll);
router.get("/:classificacaoHoraId", classificacaoHorasController.findOne);
router.put("/:classificacaoHoraId", classificacaoHorasController.update);
router.delete("/:classificacaoHoraId", classificacaoHorasController.destroy);

export default router;
