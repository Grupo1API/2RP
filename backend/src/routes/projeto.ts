import { Router } from "express";
import ProjetoController from "../controller/ProjetoController";

const routes = Router()

routes.get('/', ProjetoController.list)
routes.post('/', ProjetoController.create)
routes.put('/', ProjetoController.update)
routes.delete('/:id', ProjetoController.delete)

export default routes


