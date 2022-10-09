import { Request, Response } from 'express';
import TurnosModel from '../database/models/TurnosModel';

class TurnosController {
  async findAll(req: Request, res: Response) {
    const turnos = await TurnosModel.findAll();

    return turnos.length > 0
      ? res.status(200).json(turnos)
      : res.status(204).send();
  }
  async findOne(req: Request, res: Response) {
    const { turnoId } = req.params;
    const turno = await TurnosModel.findOne({
      where: {
        id: turnoId,
      }
    });

    return turno
      ? res.status(200).json(turno)
      : res.status(204).send();
  }

  async create(req: Request, res: Response) {
    const { nome, numero_turno } = req.body;
    const turno = await TurnosModel.create({nome, numero_turno});

    return res.status(201).json(turno);
  }

  async update(req: Request, res: Response) {
    const { turnoId } = req.params;

    await TurnosModel.update(req.body, {where: {id: turnoId }});

    return res.status(201).send();
  }

  async destroy(req: Request, res: Response) {
    const { turnoId } = req.params;

    await TurnosModel.update({status: 'inativo'}, {where: {id: turnoId }});

    return res.status(201).send();
  }
}

export default new TurnosController;