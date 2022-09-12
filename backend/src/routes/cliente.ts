import { Router } from "express"
import ClienteController from "../controller/ClienteController"

const routes = Router()

routes.get('/', ClienteController.list)
routes.post('/', ClienteController.create)
routes.put('/', ClienteController.update)
routes.delete('/:id', ClienteController.delete)

export default routes