import { Router } from "express";
import UsuariosController from "../controller/UsuariosController";

const router = Router();

router.post("/", UsuariosController.create);
router.get("/", UsuariosController.findAll);
router.get("///", UsuariosController.findAllGestor); //metodo de busca de usuarios de role "gestor"
router.get("/:usuarioId", UsuariosController.findOne);
router.put("/:usuarioId", UsuariosController.update);
router.delete("/:usuarioId", UsuariosController.destroy);

export default router;
