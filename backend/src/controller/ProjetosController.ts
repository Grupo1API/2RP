import { Request, Response } from 'express';
import ProjetosModel from '../database/models/ProjetosModel';

class ProjetosController {
  async findAll(req: Request, res: Response) {
    const projetos = await ProjetosModel.findAll();

    return projetos.length > 0
      ? res.status(200).json(projetos)
      : res.status(204).send();
  }
  async findOne(req: Request, res: Response) {
    const { projetoId } = req.params;
    const projeto = await ProjetosModel.findOne({
      where: {
        id: projetoId,
      }
    });

    return projeto
      ? res.status(200).json(projeto)
      : res.status(204).send();
  }

  async create(req: Request, res: Response) {
    const { nome, numero_projeto } = req.body;
    const projeto = await ProjetosModel.create({nome, numero_projeto});

    return res.status(201).json(projeto);
  }

  async update(req: Request, res: Response) {
    const { projetoId } = req.params;

    await ProjetosModel.update(req.body, {where: {id: projetoId }});

    return res.status(201).send();
  }

  async destroy(req: Request, res: Response) {
    const { projetoId } = req.params;

    await ProjetosModel.update({status: 'inativo'}, {where: {id: projetoId }});

    return res.status(201).send();
  }
}

export default new ProjetosController;