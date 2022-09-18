import { Router } from "express";
import CentroResultadoController from "../controller/CentroResultadoController";

const routes = Router()

routes.get('/', CentroResultadoController.list)
routes.post('/', CentroResultadoController.create)
routes.put('/', CentroResultadoController.update)
routes.delete('/:id', CentroResultadoController.delete)

export default routes


