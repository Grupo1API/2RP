import { AppDataSource } from "../app-data-source"
import { Request, Response } from 'express'
import { Cliente } from '../entity/Cliente'

class ClienteController {
  public async find(req: Request, res: Response): Promise<Response> {
    const { nome, cnpj } = req.body
    const cliente = await AppDataSource.manager.findOneBy(Cliente, { nome, cnpj })
    if (cliente)
      return res.json(cliente)
    return res.json({ error: "Dados inválidos" })
  }

  public async create(req: Request, res: Response): Promise<Response> {
    const { nome, cnpj } = req.body
    const cliente = await AppDataSource.manager.save(Cliente, { nome, cnpj }).catch((e) => {
      // testa se o cnpj é repetido
      if (/(cnpj)[\s\S]+(already exists)/.test(e.detail)) {
        return { error: 'CNPJ já existe' }
      }
      return e
    })

    return res.json(cliente)
  }

  public async update(req: Request, res: Response): Promise<Response> {
    const { id, nome, cnpj } = req.body
    const cliente: any = await AppDataSource.manager.findOneBy(Cliente, { id }).catch((e) => {
      return { error: "Identificador inválido" }
    })
    if (cliente && cliente.id) {
      cliente.nome = nome
      cliente.cnpj = cnpj
      const r = await AppDataSource.manager.save(Cliente, cliente).catch((e) => {
        // testa se o cnpj é repetido
        if (/(cnpj)[\s\S]+(already exists)/.test(e.detail)) {
          return ({ error: 'CNPJ já existe' })
        }
        return e
      })
      return res.json(r)
    }
    else if (cliente && cliente.error) {
      return res.json(cliente)
    }
    else {
      return res.json({ error: "Cliente não localizado" })
    }
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.body
    const cliente: any = await AppDataSource.manager.findOneBy(Cliente, { id }).catch((e) => {
      return { error: "Identificador inválido" }
    })
    if (cliente && cliente.id) {
      const r = await AppDataSource.manager.remove(Cliente, cliente).catch((e) => e.message)
      return res.json(r)
    }
    else if (cliente && cliente.error) {
      return res.json(cliente)
    }
    else {
      return res.json({ error: "Cliente não localizado" })
    }
  }

  public async list(req: Request, res: Response): Promise<Response> {
    const clientes = await AppDataSource.manager.find(Cliente)

    return res.json(clientes)
  }
}

export default new ClienteController()