import { Request, Response } from "express";
import TurnosModel from "../models/TurnosModel";
import UsuariosModel from "../models/UsuariosModel";

class UsuariosController {
  async findAll(req: Request, res: Response) {
    const usuarios = await UsuariosModel.findAll({ include: TurnosModel });

    return usuarios.length > 0
      ? res.status(200).json(usuarios)
      : res.status(204).send();
  }
  async findOne(req: Request, res: Response) {
    const { usuarioId } = req.params;
    const usuario = await UsuariosModel.findOne({
      include: TurnosModel,
      where: {
        id: usuarioId,
      },
    });

    return usuario ? res.status(200).json(usuario) : res.status(204).send();
  }

  async create(req: Request, res: Response) {
    const { nome, matricula, role, email, senha, turnoId, status } = req.body;
    const usuario = await UsuariosModel.create({
      nome,
      matricula,
      role,
      email,
      senha,
      turnoId,
      status,
    });

    return res.status(201).json(usuario);
  }

  async update(req: Request, res: Response) {
    const { usuarioId } = req.params;

    await UsuariosModel.update(req.body, { where: { id: usuarioId } });

    return res.status(201).send();
  }

  async destroy(req: Request, res: Response) {
    const { usuarioId } = req.params;

    await UsuariosModel.update(
      { status: "inativo" },
      { where: { id: usuarioId } }
    );

    return res.status(201).send();
  }

  ////////GESTOR//////////

  async findAllGestor(req: Request, res: Response) {
    const gestores = await UsuariosModel.findAll({
      include: TurnosModel,
      where: { role: "gestor" },
    });

    return gestores.length > 0
      ? res.status(200).json(gestores)
      : res.status(204).send();
  }

  async findOneGestor(req: Request, res: Response) {
    const { gestorId } = req.params;
    const gestor = await UsuariosModel.findOne({
      include: TurnosModel,
      where: {
        id: gestorId,
      },
    });

    return gestor ? res.status(200).json(gestor) : res.status(204).send();
  }

  async updateGestor(req: Request, res: Response) {
    const { gestorId } = req.params;

    await UsuariosModel.update(req.body, { where: { id: gestorId } });

    return res.status(201).send();
  }

  async destroyGestor(req: Request, res: Response) {
    const { gestorId } = req.params;

    await UsuariosModel.update(
      { status: "inativo" },
      { where: { id: gestorId } }
    );

    return res.status(201).send();
  }
  /////////////////////////////////////////////////////////
}

export default new UsuariosController();
