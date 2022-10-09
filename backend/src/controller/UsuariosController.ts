import { Request, Response } from 'express';
import UsuariosModel from '../database/models/UsuariosModel';

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
}

export default new UsuariosController;