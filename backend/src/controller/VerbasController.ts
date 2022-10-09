import { Request, Response } from 'express';
import VerbasModel from '../database/models/VerbasModel';

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
    const { codigo, fator, descricao_verba, apontamentoHoraId } = req.body;
    const verba = await VerbasModel.create({codigo, fator, descricao_verba, apontamentoHoraId});

    return res.status(201).json(verba);
  }

  async update(req: Request, res: Response) {
    const { verbaId } = req.params;

    await VerbasModel.update(req.body, {where: {id: verbaId }});

    return res.status(201).send();
  }

  async destroy(req: Request, res: Response) {
    const { verbaId } = req.params;

    await VerbasModel.update({status: 'inativo'}, {where: {id: verbaId }});

    return res.status(201).send();
  }
}

export default new verbasController;