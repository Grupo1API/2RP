import { Router } from "express"
import ClienteController from "./controller/ClienteController";

const router = Router()

router.post("/clientes", ClienteController.create);
router.get("/clientes", ClienteController.findAll);
router.get("/clientes/:clienteId", ClienteController.findOne);
router.put("/clientes/:clienteId", ClienteController.update);
router.delete("/clientes/:clienteId", ClienteController.destroy);

export { router };