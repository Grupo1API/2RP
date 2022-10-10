import { Request, Response } from 'express';
import ColaboradoresModel from '../database/models/ColaboradoresModel';

class ColaboradoresController {
  async findAll(req: Request, res: Response) {
    const colaboradores = await ColaboradoresModel.findAll();

    return colaboradores.length > 0
      ? res.status(200).json(colaboradores)
      : res.status(204).send();
  }
  async findOne(req: Request, res: Response) {
    const { colaboradorId } = req.params;
    const colaborador = await ColaboradoresModel.findOne({
      where: {
        id: colaboradorId,
      }
    });

    return colaborador
      ? res.status(200).json(colaborador)
      : res.status(204).send();
  }

  async create(req: Request, res: Response) {
    const { nome, matricula, tipo, turnoId } = req.body;
    const colaborador = await ColaboradoresModel.create({nome, matricula, tipo, turnoId});

    return res.status(201).json(colaborador);
  }

  async update(req: Request, res: Response) {
    const { colaboradorId } = req.params;

    await ColaboradoresModel.update(req.body, {where: {id: colaboradorId }});

    return res.status(201).send();
  }

  async destroy(req: Request, res: Response) {
    const { colaboradorId } = req.params;

    await ColaboradoresModel.update({status: 'inativo'}, {where: {id: colaboradorId }});

    return res.status(201).send();
  }
}

export default new ColaboradoresController;