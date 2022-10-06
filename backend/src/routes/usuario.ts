import { Router } from "express"
import UsuarioController from "../controller/UsuarioController"
import {authAdmin, authorization} from '../middlewares'
const routes = Router()

routes.post('/create',  UsuarioController.create)
routes.get('/', UsuarioController.list)
routes.put('/update/senha', UsuarioController.updateSenha)
routes.put('/', authorization,authAdmin, UsuarioController.update)    // obtém os dados do nível anterior da middleware e depois do Admin
routes.delete('/', authorization,authAdmin, UsuarioController.delete) // obtém os dados do nível anterior da middleware e depois do Admin

export default routes