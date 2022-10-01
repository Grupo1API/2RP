import { AppDataSource } from "../app-data-source"
import { Request, Response } from 'express'
import { Sobreaviso } from '../models/Sobreaviso'

class SobreavisoController {
  public async find(req: Request, res: Response): Promise<Response> {
    const { nome_completo, matricula, entrada1, saida1, entrada2, saida2, nome_gestor, justificativa } = req.body
    const sobreaviso = await AppDataSource.manager.findOneBy(Sobreaviso, { 
        nome_completo, 
        matricula, 
        entrada1, 
        saida1, 
        entrada2, 
        saida2, 
        nome_gestor, 
        justificativa }
        );
    if (sobreaviso)
      return res.json(sobreaviso)
    return res.json({ error: "Dados inválidos" })
  }

  public async create(req: Request, res: Response): Promise<Response> {
    const { nome_completo, matricula, entrada1, saida1, entrada2, saida2, nome_gestor, justificativa } = req.body
    const sobreaviso = await AppDataSource.manager.save(Sobreaviso, {nome_completo, matricula, entrada1, saida1, entrada2, saida2, nome_gestor, justificativa }
        ).catch((e) => {
      // testa se o matricula é repetido
      if (/(matricula)[\s\S]+(already exists)/.test(e.detail)) {
        return { error: 'matricula já existe' }
      }
      return e
    })

    return res.json(sobreaviso)
  }

  public async update(req: Request, res: Response): Promise<Response> {
    const { nome_completo, matricula, entrada1, saida1, entrada2,saida2, nome_gestor, justificativa } = req.body
    const sobreaviso: any = await AppDataSource.manager.findOneBy(Sobreaviso, { matricula }).catch((e) => {
      return { error: "Identificador inválido" }
    })
    if (sobreaviso && sobreaviso.id) {
      sobreaviso.nome_completo = nome_completo
      sobreaviso.matricula = matricula
      sobreaviso.entrada1 = entrada1
      sobreaviso.saida1 = saida1
      sobreaviso.entrada2 = entrada2
      sobreaviso.cnpj = saida2
      sobreaviso.nome_gestor = nome_gestor
      sobreaviso.justificativa = justificativa
      const r = await AppDataSource.manager.save(sobreaviso, sobreaviso).catch((e) => {
        // testa se o cnpj é repetido
        if (/(matricula)[\s\S]+(already exists)/.test(e.detail)) {
          return ({ error: 'Matrícula já existe' })
        }
        return e
      })
      return res.json(r)
    }
    else if (sobreaviso && sobreaviso.error) {
      return res.json(sobreaviso)
    }
    else {
      return res.json({ error: "Sobreaviso não localizado" })
    }
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    const {matricula } = req.body
    const sobreaviso: any = await AppDataSource.manager.findOneBy(Sobreaviso, { matricula }).catch((e) => {
      return { error: "Identificador inválido" }
    })
    if (sobreaviso && sobreaviso.matricula) {
      const r = await AppDataSource.manager.remove(Sobreaviso, sobreaviso).catch((e) => e.message)
      return res.json(r)
    }
    else if (sobreaviso && sobreaviso.error) {
      return res.json(sobreaviso)
    }
    else {
      return res.json({ error: "Sobreaviso não localizado" })
    }
  }

  public async list(req: Request, res: Response): Promise<Response> {
    const sobreaviso = await AppDataSource.manager.find(Sobreaviso)

    return res.json(sobreaviso)
  }
}

export default new SobreavisoController()