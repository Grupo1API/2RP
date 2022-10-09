import { Request, Response } from 'express';
import { SobreavisoModel } from '../database/models/SobreavisoModel';

class sobreavisoController {
  async findAll(req: Request, res: Response) {
    const sobreavisos = await SobreavisoModel.findAll();

    return sobreavisos.length > 0
      ? res.status(200).json(sobreavisos)
      : res.status(204).send();
  }
  async findOne(req: Request, res: Response) {
    const { sobreavisoId } = req.params;
    const sobreaviso = await SobreavisoModel.findOne({
      where: {
        id: sobreavisoId,
      }
    });

    return sobreaviso
      ? res.status(200).json(sobreaviso)
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
    const sobreaviso = await SobreavisoModel.create({
      nome_completo,
      matricula,
      entrada_1,
      saida_1,
      entrada_2,
      saida_2,
      nome_gestor,
      justificativa
    });

    return res.status(201).json(sobreaviso);
  }

  async update(req: Request, res: Response) {
    const { sobreavisoId } = req.params;

    await SobreavisoModel.update(req.body, {where: {id: sobreavisoId }});

    return res.status(201).send();
  }

  async destroy(req: Request, res: Response) {
    const { sobreavisoId } = req.params;

    await SobreavisoModel.update({status: 'inativo'}, {where: {id: sobreavisoId }});

    return res.status(201).send();
  }
}

export default new sobreavisoController;