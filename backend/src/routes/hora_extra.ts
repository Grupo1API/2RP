import { Router } from "express"
import HoraExtraController from "../controller/HoraExtraController"

const routes = Router()

routes.get('/', HoraExtraController.list)
routes.post('/', HoraExtraController.create)
routes.put('/', HoraExtraController.update)
routes.delete('/:id', HoraExtraController.delete)

export default routes