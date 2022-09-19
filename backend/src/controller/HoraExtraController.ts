import { AppDataSource } from "../app-data-source";
import { Request, Response } from "express";
import { HoraExtra } from "../entity/HoraExtra";

class HoraExtraController {
    public async find(req: Request, res: Response): Promise<Response> {
      const { nome_completo, matricula, entrada1, saida1, entrada2,saida2, nome_gestor, justificativa  } = req.body;
      const hora_extra = await AppDataSource.manager.findOneBy(HoraExtra, {
        nome_completo,
        matricula,
        entrada1,
        saida1,
        entrada2,
        saida2,
        nome_gestor,
        justificativa,
      });
      if (hora_extra) 
        return res.json(hora_extra);
      return res.json({ error: "Dados incorretos" });
    }

    public async create(req: Request, res: Response): Promise<Response> {
        const { nome_completo, matricula, entrada1, saida1, entrada2,saida2, nome_gestor, justificativa } = req.body
        const hora_extra = await AppDataSource.manager.save(HoraExtra, { nome_completo, matricula, entrada1, saida1, entrada2,saida2, nome_gestor, justificativa }).catch((e) => {

          if (/(matricula)[\s\S]+(already exists)/.test(e.detail)) {
            return { error: 'matricula já existe' }
          }
          return e
        })
    
        return res.json(hora_extra)
      }

      public async update(req: Request, res: Response): Promise<Response> {
    const { nome_completo, matricula, entrada1, saida1, entrada2,saida2, nome_gestor, justificativa } = req.body
    const hora_extra: any = await AppDataSource.manager.findOneBy(HoraExtra, { matricula }).catch((e) => {
      return { error: "Identificador inválido" }
    })
    if (hora_extra && hora_extra.id) {
      hora_extra.nome_completo = nome_completo
      hora_extra.matricula = matricula
      hora_extra.entrada1 = entrada1
      hora_extra.saida1 = saida1
      hora_extra.entrada2 = entrada2
      hora_extra.cnpj = saida2
      hora_extra.nome_gestor = nome_gestor
      hora_extra.justificativa = justificativa
      const r = await AppDataSource.manager.save(hora_extra, hora_extra).catch((e) => {
        if (/(matricula)[\s\S]+(already exists)/.test(e.detail)) {
          return ({ error: 'Matrícula já existe' })
        }
        return e
      })
      return res.json(r)
    }
    else if (hora_extra && hora_extra.error) {
      return res.json(hora_extra)
    }
    else {
      return res.json({ error: "Hora extra não localizada" })
    }
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    const {matricula } = req.body
    const hora_extra: any = await AppDataSource.manager.findOneBy(HoraExtra, { matricula }).catch((e) => {
      return { error: "Identificador inválido" }
    })
    if (hora_extra && hora_extra.matricula) {
      const r = await AppDataSource.manager.remove(HoraExtra, hora_extra).catch((e) => e.message)
      return res.json(r)
    }
    else if (hora_extra && hora_extra.error) {
      return res.json(hora_extra)
    }
    else {
      return res.json({ error: "Hora extra não localizada" })
    }
  }

  public async list(req: Request, res: Response): Promise<Response> {
    const hora_extras = await AppDataSource.manager.find(HoraExtra)

    return res.json(hora_extras)
  }
}

export default new HoraExtraController()