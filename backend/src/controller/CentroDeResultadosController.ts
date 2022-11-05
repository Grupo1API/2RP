import { Request, Response } from 'express';
import CentroDeResultados from '../database/models/CentroDeResultadosModel';

class CentroDeResultadosController {
  async findAll(req: Request, res: Response) {
    const centroResultados = await CentroDeResultados.findAll( {include : [ {model: UsuariosModel} ,{model: ClientesModel}] });

    return centroResultados.length > 0
      ? res.status(200).json(centroResultados)
      : res.status(204).send();
  }

  async findOne(req: Request, res: Response) {
    const { centroDeResultadoId } = req.params;
    const centroResultado = await CentroDeResultados.findOne({ include: UsuariosModel ,
      where: {
        id: centroDeResultadoId
      }
    });

    return centroResultado
      ? res.status(200).json(centroResultado)
      : res.status(204).send();
  }

  async create(req: Request, res: Response) {
    const { nome, numero, colaboradorId, gestorId,projetoId} = req.body;
    const centroResultado = await CentroDeResultados.create({nome, numero, colaboradorId, gestorId,projetoId});

    return res.status(201).json(centroResultado);
  }

  async update(req: Request, res: Response) {
    const { centroDeResultadoId } = req.params;

    await CentroDeResultados.update(req.body, {where: {id: centroDeResultadoId }});

    return res.status(201).send();
  }

  async destroy(req: Request, res: Response) {
    const { centroDeResultadoId } = req.params;

    await CentroDeResultados.update({status: 'inativo'}, {where: {id: centroDeResultadoId }});

    return res.status(201).send();
  }
}

export default new CentroDeResultadosController