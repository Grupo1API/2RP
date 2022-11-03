import { Request, Response } from 'express';
import * as bcrypt from 'bcrypt'
import * as jwt from "jsonwebtoken";
import UsuariosModel from '../models/UsuariosModel';

class UsuariosController {
  async findAll(req: Request, res: Response) {
    const usuarios = await UsuariosModel.findAll();

    return usuarios.length > 0
      ? res.status(200).json(usuarios)
      : res.status(204).send();
  }
  async findOne(req: Request, res: Response) {
    const { usuarioId } = req.params;
    const usuario = await UsuariosModel.findOne({
      where: {
        id: usuarioId,
      }
    });

    return usuario
      ? res.status(200).json(usuario)
      : res.status(204).send();
  }

  async create(req: Request, res: Response) {
    const { email, senha } = req.body;
    const usuario = await UsuariosModel.create({email, senha});

    return res.status(201).json(usuario);
  }

  async update(req: Request, res: Response) {
    const { usuarioId } = req.params;

    await UsuariosModel.update(req.body, {where: {id: usuarioId }});

    return res.status(201).send();
  }

  async destroy(req: Request, res: Response) {
    const { usuarioId } = req.params;

    await UsuariosModel.update({status: 'inativo'}, {where: {id: usuarioId }});

    return res.status(201).send();
  }

  async singup(req: Request, res: Response) {
    try {
      const { id, role, email, senha } = req.body;
    
      type Data = {
        id: Number;
        role: String;
        email: String;
        senha: String;
      }
    
       const data: Data = {
        id,
        role,
        email,
        senha: await bcrypt.hash(senha, 10),
       };

       const user = await UsuariosModel.create(data);
    
       if (user) {
         let token = jwt.sign({ id: user.id }, "lbkjbefkjbwekfkewfk", {
           expiresIn: 1 * 24 * 60 * 60 * 1000,
         });
    
         res.cookie("jwt", token, { maxAge: 1 * 24 * 60 * 60, httpOnly: true });
         console.log("user", JSON.stringify(user, null, 2));
         console.log(token);

         return res.status(201).send(user);
       } else {
         return res.status(409).send("Details are not correct");
       }
     } catch (error) {
       console.log(error);
     }
  }
    
  async login(req: Request, res: Response) {
    try {
    const { email, senha } = req.body;
    const user = await UsuariosModel.findOne({ email });

    if (user) {
      const isSame = await bcrypt.compare(senha, user.senha);
  
      if (isSame) {
        let token = jwt.sign({ id: user.id }, "lbkjbefkjbwekfkewfk", {
          expiresIn: 1 * 24 * 60 * 60 * 1000,
        });

        res.cookie("jwt", token, { maxAge: 1 * 24 * 60 * 60, httpOnly: true });
        console.log("user", JSON.stringify(user, null, 2));
        console.log(token);
        
        return res.status(201).send(user);
      } else {
        return res.status(401).send("Authentication failed");
      }
      } else {
        return res.status(401).send("Authentication failed");
      }
    } catch (error) {
      console.log(error);
    }
  }
}

export default new UsuariosController;