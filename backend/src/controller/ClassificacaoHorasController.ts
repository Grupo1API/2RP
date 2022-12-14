import { Request, Response } from "express";
import ApontamentoHorasModel from "../models/ApontamentoHorasModel";
import ClassificacaoHorasModel from "../models/ClassificacaoHorasModel";
import VerbasModel from "../models/VerbasModel";

class ClassificacaoHorasController {
  async findAll(req: Request, res: Response) {
    const ClassificacaoHoras = await ClassificacaoHorasModel.findAll(
      {include: [
        { model: VerbasModel, as: 'verba' },
        { model: ApontamentoHorasModel, as: 'apontamento' }]}
    );

    return ClassificacaoHoras.length > 0
      ? res.status(200).json(ClassificacaoHoras)
      : res.status(204).send();
  }
  async findOne(req: Request, res: Response) {
    const { classificacaoHoraId } = req.params;
    const classificacaoHora = await ClassificacaoHorasModel.findOne({
      include: [
        { model: VerbasModel, as: 'verba' },
        { model: ApontamentoHorasModel, as: 'apontamento' }],
      where: {
        id: classificacaoHoraId,
      },
    });

    return classificacaoHora
      ? res.status(200).json(classificacaoHora)
      : res.status(204).send();
  }

  async create(req: Request, res: Response) {
    const { quantidadeHoras, verbaId,apontamentoId } = req.body;
    const classificacaoHora = await ClassificacaoHorasModel.create({
      quantidadeHoras,
      verbaId,
      apontamentoId

    },{
      include: [
        { model: VerbasModel, as: 'verba' },
        { model: ApontamentoHorasModel, as: 'apontamento' }]
    });

    return res.status(201).json(classificacaoHora);
  }

  async update(req: Request, res: Response) {
    const { classificacaoHoraId } = req.params;

    await ClassificacaoHorasModel.update(req.body, {
      where: { id: classificacaoHoraId },
    });

    return res.status(201).send();
  }

  async destroy(req: Request, res: Response) {
    const { classificacaoHoraId } = req.params;

    await ClassificacaoHorasModel.update(
      { status: "inativo" },
      { where: { id: classificacaoHoraId } }
    );

    return res.status(201).send();
  }
}

export default new ClassificacaoHorasController();
