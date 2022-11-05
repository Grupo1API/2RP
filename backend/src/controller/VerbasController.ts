import { Request, Response } from 'express';
import VerbasModel from '../models/VerbasModel';

class verbasController {
  async findAll(req: Request, res: Response) {
    const verbas = await VerbasModel.findAll();

    return verbas.length > 0
      ? res.status(200).json(verbas)
      : res.status(204).send();
  }
  async findOne(req: Request, res: Response) {
    const { verbaId } = req.params;
    const verba = await VerbasModel.findOne({
      where: {
        id: verbaId,
      }
    });

    return verba
      ? res.status(200).json(verba)
      : res.status(204).send();
  }

  async create(req: Request, res: Response) {
    const { codigo, descricao,fator, percentual, verbaId } = req.body;
    const verba = await VerbasModel.create({codigo,descricao, fator, percentual, verbaId});

    return res.status(201).json(verba);
  }

  async update(req: Request, res: Response) {
    const { verbaId } = req.params;

    await VerbasModel.update(req.body, {where: {id: verbaId }});

    return res.status(201).send();
  }

  async destroy(req: Request, res: Response) {
    const { verbaId } = req.params;

    const excluido = await VerbasModel.destroy({
      where: {
        id: verbaId 
      }});

    return excluido
    ? res.status(201).json(excluido)
    : res.status(204).send();
  }
}

export default new verbasController;