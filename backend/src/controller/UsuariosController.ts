import { Request, Response } from 'express';
import * as bcrypt from 'bcrypt'
import * as jwt from "jsonwebtoken";
import UsuariosModel from '../models/UsuariosModel';
import TurnosModel from '../models/TurnosModel';

class UsuariosController {
  async findAll(req: Request, res: Response) {
    const usuarios = await UsuariosModel.findAll({include: TurnosModel});

    return usuarios.length > 0
      ? res.status(200).json(usuarios)
      : res.status(204).send();
  }
  async findOne(req: Request, res: Response) {
    const { usuarioId } = req.params;
    const usuario = await UsuariosModel.findOne({include: TurnosModel,
      where: {
        id: usuarioId,
      }
    });

    return usuario
      ? res.status(200).json(usuario)
      : res.status(204).send();
  }

  async update(req: Request, res: Response) {
    const { usuarioId } = req.params;

    await UsuariosModel.update(req.body, {where: {id: usuarioId }});

    return res.status(201).send();
  }

  async singup(req: Request, res: Response) {
    try {
      const { id,nome,matricula, role, email, senha,status, turnoId } = req.body;
    
      type Data = {
        id: Number;
        role: string;
        nome: string;
        matricula:string;
        email: string;
        senha: string;
        status:string;
        turnoId: Number;
      }
    
       const data: Data = {
        id,
        role,
        nome,
        matricula,
        email,
        status,
        turnoId,
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
    const user = await UsuariosModel.findOne({ where: { email } });


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

////////GESTOR//////////

async findAllGestor(req: Request, res: Response) {
  const gestores = await UsuariosModel.findAll({include: TurnosModel,
    where: {role:'gestor'}}
  );

  return gestores.length > 0
    ? res.status(200).json(gestores)
    : res.status(204).send();
}

  async findOneGestor(req: Request, res: Response) {
    const { gestorId } = req.params;
    const gestor = await UsuariosModel.findOne({include: TurnosModel,
      where: {
        id: gestorId,
      }
    });
    
    return gestor
    ? res.status(200).json(gestor)
    : res.status(204).send();
}

async updateGestor(req: Request, res: Response) {
  const { gestorId } = req.params;

  await UsuariosModel.update(req.body, {where: {id: gestorId }});

  return res.status(201).send();
}

async destroyGestor(req: Request, res: Response) {
  const { gestorId } = req.params;

  await UsuariosModel.update({status: 'inativo'}, {where: {id: gestorId }});

  return res.status(201).send();
}
/////////////////////////////////////////////////////////

}

export default new UsuariosController;