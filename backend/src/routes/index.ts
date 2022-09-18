import { Router, Request, Response } from "express"
import centro_resultado  from "./centro_resultado"
import cliente from './cliente'


const routes = Router()

routes.use("/cliente", cliente)
routes.use("/centro-resultado", centro_resultado)
//routes.use("/hora_extra", hora_extra)
//routes.use("/hora_sobreaviso", hora_sobreaviso)

//aceita qualquer método HTTP ou URL
routes.use( (req:Request,res:Response) => res.json({error:"Requisição desconhecida"}) )

export default routes
