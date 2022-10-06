import { Request, Response, NextFunction } from "express";
import * as jwt from 'jsonwebtoken';
import * as dotenv from 'dotenv'
dotenv.config()
const process = require('process');


export const generateToken = async  (usuario: string | object | Buffer) => jwt.sign(usuario, process.env.JWT_SECRET);

export const authorization = async (req: Request, res: Response, next: NextFunction) => {

    const  authorization  = req.headers.authorization

    try {
        const [,token] = authorization?authorization.split(" "):[,""];
        console.log(token)

        const decoded = <any>jwt.verify(token, process.env.JWT_SECRET);
        console.log(decoded)

        if( !decoded || !decoded.idusuario ){
            res.status(401).send({error:"Não autorizado"});
        }
        else{
            res.locals = {idusuario: decoded.idusuario, perfil: decoded.perfil}
        }
    } catch (error) {
        res.status(401).send({error:"Não autorizado"});
        return;
    }
    return next();
};

// Autorização de gestor  //

export const authGestor = async (req: Request, res: Response, next: NextFunction) => {

    const {perfil} = res.locals
    if( perfil !== 'gestor' ){
        res.status(401).send({error:"Sem autorização para acessar o recurso"});
        return;
    }
    return next();

};

// Autorização de admin  //

export const authAdmin = async (req: Request, res: Response, next: NextFunction) => {

    const {perfil} = res.locals
    if( perfil !== 'admin' ){
        res.status(401).send({error:"Sem autorização para acessar o recurso"});
        return;
    }
    return next();

};