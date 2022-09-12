import { AppDataSource } from "../app-data-source"
import { Request, Response } from 'express'
import { Cliente } from '../entity/Cliente'

class ClienteController {
  /*public async find(req: Request, res: Response): Promise<Response> {
    const { mail, senha } = req.body
    const usuario = await AppDataSource.manager.findOneBy(Usuario, { mail, senha })
    if (usuario)
      return res.json(usuario)
    return res.json({ error: "Dados inválidos" })
  }*/

  public async create(req: Request, res: Response): Promise<Response> {
    const { nome, cnpj } = req.body
    const cliente = await AppDataSource.manager.save(Cliente, { nome, cnpj }).catch((e) => {
      // testa se o e-mail é repetido
      if (/(cnpj)[\s\S]+(already exists)/.test(e.detail)) {
        return { error: 'CNPJ já existe' }
      }
      return e
    })

    return res.json(cliente)
  }

  /*public async update(req: Request, res: Response): Promise<Response> {
    const { id, mail, senha } = req.body
    const usuario: any = await AppDataSource.manager.findOneBy(Usuario, { id }).catch((e) => {
      return { error: "Identificador inválido" }
    })
    if (usuario && usuario.id) {
      usuario.mail = mail
      usuario.senha = senha
      const r = await AppDataSource.manager.save(Usuario, usuario).catch((e) => {
        // testa se o e-mail é repetido
        if (/(mail)[\s\S]+(already exists)/.test(e.detail)) {
          return ({ error: 'e-mail já existe' })
        }
        return e
      })
      return res.json(r)
    }
    else if (usuario && usuario.error) {
      return res.json(usuario)
    }
    else {
      return res.json({ error: "Usuário não localizado" })
    }
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.body
    const usuario: any = await AppDataSource.manager.findOneBy(Usuario, { id }).catch((e) => {
      return { error: "Identificador inválido" }
    })
    if (usuario && usuario.id) {
      const r = await AppDataSource.manager.remove(Usuario, usuario).catch((e) => e.message)
      return res.json(r)
    }
    else if (usuario && usuario.error) {
      return res.json(usuario)
    }
    else {
      return res.json({ error: "Usuário não localizado" })
    }
  }

  public async list(req: Request, res: Response): Promise<Response> {
    const usuarios = await AppDataSource.manager.find(Usuario)

    return res.json(usuarios)
  }*/
}

export default new ClienteController()