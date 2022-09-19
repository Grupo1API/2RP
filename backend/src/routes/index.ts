import { Router, Request, Response } from "express"
import centro_resultado  from "./centro_resultado"
import cliente from './cliente'
import hora_extra from "./hora_extra"
import sobreaviso from "./sobreaviso"


const routes = Router()

routes.use("/cliente", cliente)
routes.use("/centro-resultado", centro_resultado)
routes.use("/hora-extra", hora_extra)
routes.use("/sobreaviso", sobreaviso)

//aceita qualquer método HTTP ou URL
routes.use( (req:Request,res:Response) => res.json({error:"Requisição desconhecida"}) )

export default routes
