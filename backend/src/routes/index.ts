import { Router, Request, Response } from "express"
import cliente from './cliente'


const routes = Router()

routes.use("/cliente", cliente)

//aceita qualquer método HTTP ou URL
routes.use( (req:Request,res:Response) => res.json({error:"Requisição desconhecida"}) )

export default routes