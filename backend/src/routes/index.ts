import { Router, Request, Response } from "express"
import centro_resultado  from "./centro_resultado"
import cliente from './cliente'
import hora_extra from "./hora_extra"
import sobreaviso from "./sobreaviso"
import UsuarioController from "../controller/UsuarioController"
import usuario from "./usuario"


const routes = Router()

routes.use("/cliente", cliente)
routes.use("/centro-resultado", centro_resultado)
routes.use("/hora-extra", hora_extra)
routes.use("/sobreaviso", sobreaviso)
routes.use("/usuario", usuario)
routes.post("/login",  UsuarioController.login)

//aceita qualquer método HTTP ou URL
routes.use( (req:Request,res:Response) => res.json({error:"Requisição desconhecida"}) )

export default routes
