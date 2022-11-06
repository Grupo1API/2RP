import { Router } from "express";
import clientesController from "../controller/ClientesController";

const router = Router();

router.post("/", clientesController.create);
router.get("/", clientesController.findAll);
router.get("/:clienteId", clientesController.findOne);
router.put("/:clienteId", clientesController.update);
router.delete("/:clienteId", clientesController.destroy);

export default router;