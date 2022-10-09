import { Request, Response } from 'express';
import { HoraExtraModel } from '../database/models/HoraExtraModel';

class HoraExtraController {
  async findAll(req: Request, res: Response) {
    const horasExtras = await HoraExtraModel.findAll();

    return horasExtras.length > 0
      ? res.status(200).json(horasExtras)
      : res.status(204).send();
  }
  async findOne(req: Request, res: Response) {
    const { horaExtraId } = req.params;
    const horaExtra = await HoraExtraModel.findOne({
      where: {
        id: horaExtraId,
      }
    });

    return horaExtra
      ? res.status(200).json(horaExtra)
      : res.status(204).send();
  }

  async create(req: Request, res: Response) {
    const {
      nome_completo,
      matricula,
      entrada_1,
      saida_1,
      entrada_2,
      saida_2,
      nome_gestor,
      justificativa
    } = req.body;
    const horaExtra = await HoraExtraModel.create({
      nome_completo,
      matricula,
      entrada_1,
      saida_1,
      entrada_2,
      saida_2,
      nome_gestor,
      justificativa
    });

    return res.status(201).json(horaExtra);
  }

  async update(req: Request, res: Response) {
    const { horaExtraId } = req.params;

    await HoraExtraModel.update(req.body, {where: {id: horaExtraId }});

    return res.status(201).send();
  }

  async destroy(req: Request, res: Response) {
    const { horaExtraId } = req.params;

    await HoraExtraModel.update({status: 'inativo'}, {where: {id: horaExtraId }});

    return res.status(201).send();
  }
}

export default new HoraExtraController;