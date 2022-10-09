import { Request, Response } from 'express';
import ApontamentoHorasModel from '../database/models/ApontamentoHorasModel';

class ApontamentoHorasController {
  async findAll(req: Request, res: Response) {
    const horasExtras = await ApontamentoHorasModel.findAll();

    return horasExtras.length > 0
      ? res.status(200).json(horasExtras)
      : res.status(204).send();
  }
  async findOne(req: Request, res: Response) {
    const { apontamentoHoraId } = req.params;
    const horaExtra = await ApontamentoHorasModel.findOne({
      where: {
        id: apontamentoHoraId,
      }
    });

    return horaExtra
      ? res.status(200).json(horaExtra)
      : res.status(204).send();
  }

  async create(req: Request, res: Response) {
    const {
      tipo_apontamento,
      horario_inicio,
      hotatio_fim,
      justificativa
    } = req.body;
    const horaExtra = await ApontamentoHorasModel.create({
      tipo_apontamento,
      horario_inicio,
      hotatio_fim,
      justificativa
    });

    return res.status(201).json(horaExtra);
  }

  async update(req: Request, res: Response) {
    const { apontamentoHoraId } = req.params;

    await ApontamentoHorasModel.update(req.body, {where: {id: apontamentoHoraId }});

    return res.status(201).send();
  }

  async destroy(req: Request, res: Response) {
    const { apontamentoHoraId } = req.params;

    await ApontamentoHorasModel.update({status: 'inativo'}, {where: {id: apontamentoHoraId }});

    return res.status(201).send();
  }
}

export default new ApontamentoHorasController;