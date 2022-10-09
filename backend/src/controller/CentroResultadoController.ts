import { Request, Response } from 'express';
import { CentroResultadoModel } from '../database/models/CentroResultadoModel';

class CentroResultadoController {
  async findAll(req: Request, res: Response) {
    const centroResultados = await CentroResultadoModel.findAll();

    return centroResultados.length > 0
      ? res.status(200).json(centroResultados)
      : res.status(204).send();
  }

  async findOne(req: Request, res: Response) {
    const { centroResultadoId } = req.params;
    const centroResultado = await CentroResultadoModel.findOne({
      where: {
        id: centroResultadoId
      }
    });

    return centroResultado
      ? res.status(200).json(centroResultado)
      : res.status(204).send();
  }

  async create(req: Request, res: Response) {
    const { nome, numero } = req.body;
    const centroResultado = await CentroResultadoModel.create({nome, numero});

    return res.status(201).json(centroResultado);
  }

  async update(req: Request, res: Response) {
    const { centroResultadoId } = req.params;

    await CentroResultadoModel.update(req.body, {where: {id: centroResultadoId }});

    return res.status(201).send();
  }

  async destroy(req: Request, res: Response) {
    const { centroResultadoId } = req.params;

    await CentroResultadoModel.update({status: 'inativo'}, {where: {id: centroResultadoId }});

    return res.status(201).send();
  }
}

export default new CentroResultadoController