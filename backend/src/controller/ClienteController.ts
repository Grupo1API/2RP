import { Request, Response } from 'express';
import { ClienteModel } from '../database/models/ClienteModel';

class ClienteController {
  async findAll(req: Request, res: Response) {}
  async findOne(req: Request, res: Response) {}
  async create(req: Request, res: Response) {
    const { nome, cnpj, contato } = req.body;
    const cliente = await ClienteModel.create({nome, cnpj, contato});
    return res.status(201).json(cliente);
  }
  async update(req: Request, res: Response) {}
  async destroy(req: Request, res: Response) {}
}

export default new ClienteController;