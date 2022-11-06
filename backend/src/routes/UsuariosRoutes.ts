import { Router } from "express";
import UsuariosController from "../controller/UsuariosController";
import UsuariosAuth from "../middlewares/UsuariosAuth";

const router = Router();

router.post("/", UsuariosAuth, UsuariosController.create);
router.get("/", UsuariosController.findAll);
router.get("/:usuarioId", UsuariosController.findOne);
router.put("/:usuarioId", UsuariosController.update);
router.delete("/:usuarioId", UsuariosController.destroy);

export default router;