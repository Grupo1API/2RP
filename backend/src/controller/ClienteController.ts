import { Request, Response } from 'express';
import { ClienteModel } from '../database/models/ClienteModel';

class ClienteController {
  async findAll(req: Request, res: Response) {
    const clientes = await ClienteModel.findAll();

    return clientes.length > 0
      ? res.status(200).json(clientes)
      : res.status(204).send();
  }
  async findOne(req: Request, res: Response) {
    const { clienteId } = req.params;
    const cliente = await ClienteModel.findOne({
      where: {
        id: clienteId,
      }
    });

    return cliente
      ? res.status(200).json(cliente)
      : res.status(204).send();
  }

  async create(req: Request, res: Response) {
    const { nome, cnpj, contato } = req.body;
    const cliente = await ClienteModel.create({nome, cnpj, contato});

    return res.status(201).json(cliente);
  }

  async update(req: Request, res: Response) {
    const { clienteId } = req.params;

    await ClienteModel.update(req.body, {where: {id: clienteId }});

    return res.status(201).send();
  }

  async destroy(req: Request, res: Response) {
    const { clienteId } = req.params;

    await ClienteModel.update({status: 'inativo'}, {where: {id: clienteId }});

    return res.status(201).send();
  }
}

export default new ClienteController;