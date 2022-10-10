import { Request, Response } from 'express';
import ClientesModel from '../database/models/ClientesModel';

class ClientesController {
  async findAll(req: Request, res: Response) {
    const clientes = await ClientesModel.findAll();

    return clientes.length > 0
      ? res.status(200).json(clientes)
      : res.status(204).send();
  }
  async findOne(req: Request, res: Response) {
    const { clienteId } = req.params;
    const cliente = await ClientesModel.findOne({
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
    const cliente = await ClientesModel.create({nome, cnpj, contato});

    return res.status(201).json(cliente);
  }

  async update(req: Request, res: Response) {
    const { clienteId } = req.params;

    await ClientesModel.update(req.body, {where: {id: clienteId }});

    return res.status(201).send();
  }

  async destroy(req: Request, res: Response) {
    const { clienteId } = req.params;

    await ClientesModel.update({status: 'inativo'}, {where: {id: clienteId }});

    return res.status(201).send();
  }
}

export default new ClientesController;