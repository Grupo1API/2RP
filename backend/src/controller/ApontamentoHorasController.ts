import { Request, Response } from 'express';
import ApontamentoHorasModel from '../models/ApontamentoHorasModel';

class ApontamentoHorasController {
  async findAll(req: Request, res: Response) {
    const apontamentoHoras = await ApontamentoHorasModel.findAll();

    return apontamentoHoras.length > 0
      ? res.status(200).json(apontamentoHoras)
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
      horario_fim,
      justificativa
    } = req.body;
    const horaExtra = await ApontamentoHorasModel.create({
      tipo_apontamento,
      horario_inicio,
      horario_fim,
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