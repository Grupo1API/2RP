import { Request, Response } from "express";
import ApontamentoHorasModel from "../models/ApontamentoHorasModel";
import ClientesModel from "../models/ClientesModel";
import UsuariosModel from "../models/UsuariosModel";
import * as jwt from "jsonwebtoken";

class ApontamentoHorasController {
  async findAll(req: Request, res: Response) {
    const apontamentoHoras = await ApontamentoHorasModel.findAll(
      {
        include: [
        { model: UsuariosModel, attributes: ['id','nome','role'], as: 'colaborador' },
        { model: UsuariosModel ,attributes: ['id','nome','role'], as: 'gestor' }, 
        { model: ClientesModel , as: 'projeto'}],
      }
    );

    return apontamentoHoras.length > 0
      ? res.status(200).json(apontamentoHoras)
      : res.status(204).send();
  }
  async findOne(req: Request, res: Response) {
    const { apontamentoHoraId } = req.params;
    const horaExtra = await ApontamentoHorasModel.findOne({
        include: [
        { model: UsuariosModel, attributes: ['id','nome','role'], as: 'colaborador' },
        { model: UsuariosModel ,attributes: ['id','nome','role'], as: 'gestor' }, 
        { model: ClientesModel , as: 'projeto'}],
      where: {
        id: apontamentoHoraId,
      },
    });

    return horaExtra ? res.status(200).json(horaExtra) : res.status(204).send();
  }



  async create(req: Request, res: Response) {
    const { tipo_apontamento, horario_inicio, horario_fim, justificativa,usuarioId, gestorId, projetoId } =
      req.body 
    



      const user = req.headers.authorization;
      const token:any = user?.split(" ")
      const decoded:any = jwt.verify(token[1], 'lbkjbefkjbwekfkewfk');
      const usuario = decoded.id;

      const horaExtra = await ApontamentoHorasModel.create({
      tipo_apontamento,
      horario_inicio,
      horario_fim,
      justificativa,
      gestorId,
      projetoId,
      usuarioId: usuario
    },
    {
      include: [
      { model: UsuariosModel, attributes: ['id','nome','role'], as: 'colaborador' },
      { model: UsuariosModel ,attributes: ['id','nome','role'], as: 'gestor' }, 
      { model: ClientesModel , as: 'projeto'}],
    }
    );

    return res.status(201).json(horaExtra);
  }

  async update(req: Request, res: Response) {
    const { apontamentoHoraId } = req.params;

    await ApontamentoHorasModel.update(req.body, {
      where: { id: apontamentoHoraId },
    });

    return res.status(201).send();
  }

  async destroy(req: Request, res: Response) {
    const { apontamentoHoraId } = req.params;

    await ApontamentoHorasModel.update(
      { status: "inativo" },
      { where: { id: apontamentoHoraId } }
    );

    return res.status(201).send();
  }

  async aprovarHora(req: Request, res: Response) {
    const { apontamentoHoraId } = req.params;

    await ApontamentoHorasModel.update(
      { statusApontamento: "aprovado" },
      { where: { id: apontamentoHoraId } }
    );

    return res.status(201).send();
  }


  async reprovarHora(req: Request, res: Response) {
    const { apontamentoHoraId } = req.params;

    await ApontamentoHorasModel.update(
      { statusApontamento: "reprovado" },
      { where: { id: apontamentoHoraId } }
    );

    return res.status(201).send();
}
}

export default new ApontamentoHorasController();
