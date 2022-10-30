import { Request, Response } from 'express';
import GestoresModel from '../models/GestoresModel';

class GestoresController {
  async findAll(req: Request, res: Response) {
    const gestores = await GestoresModel.findAll();

    return gestores.length > 0
      ? res.status(200).json(gestores)
      : res.status(204).send();
  }
  async findOne(req: Request, res: Response) {
    const { gestorId } = req.params;
    const gestor = await GestoresModel.findOne({
      where: {
        id: gestorId,
      }
    });

    return gestor
      ? res.status(200).json(gestor)
      : res.status(204).send();
  }

  async create(req: Request, res: Response) {
    const { nome } = req.body;
    const gestor = await GestoresModel.create({nome});

    return res.status(201).json(gestor);
  }

  async update(req: Request, res: Response) {
    const { gestorId } = req.params;

    await GestoresModel.update(req.body, {where: {id: gestorId }});

    return res.status(201).send();
  }

  async destroy(req: Request, res: Response) {
    const { gestorId } = req.params;

    await GestoresModel.update({status: 'inativo'}, {where: {id: gestorId }});

    return res.status(201).send();
  }
}

export default new GestoresController;