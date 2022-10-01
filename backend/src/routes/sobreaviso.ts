import { Router } from "express"
import SobreavisoController from "../controllers/SobreavisoController"

const routes = Router()

routes.get('/', SobreavisoController.list)
routes.post('/', SobreavisoController.create)
routes.put('/', SobreavisoController.update)
routes.delete('/:id', SobreavisoController.delete)

export default routes