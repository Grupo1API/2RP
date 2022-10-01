import { AppDataSource } from "../app-data-source";
import { Request, Response } from "express";
import { CentroResultado } from "../models/CentroResultado";

class CentroResultadoController {
  public async find(req: Request, res: Response): Promise<Response> {
    const { nome, numero } = req.body;
    const centro_resultado = await AppDataSource.manager.findOneBy(CentroResultado, {
      nome,
      numero,
    });
    if (centro_resultado) 
      return res.json(centro_resultado);
    return res.json({ error: "Dados inválidos" });
  }

  public async create(req: Request, res: Response): Promise<Response> {
    const { nome, numero } = req.body;
    const centro_resultado = await AppDataSource.manager
      .save(CentroResultado, { nome, numero }).catch((e) => {
        // testa se o numero é repetido
        if (/(numero)[\s\S]+(already exists)/.test(e.detail)) {
          return { error: 'O número já existe' }
        }
        return e
      })
    
    return res.json(centro_resultado);
  }

  public async update(req: Request, res: Response): Promise<Response> {
    const { id, nome, numero } = req.body;
    const centro_resultado: any = await AppDataSource.manager
      .findOneBy(CentroResultado, { id })
      .catch((e) => {
        return { error: "Identificador inválido" };
      });
    if (centro_resultado && centro_resultado.id) {
      centro_resultado.nome = nome;
      centro_resultado.numero = numero;
      const r = await AppDataSource.manager
        .save(CentroResultado, centro_resultado).catch((e) => {
          // testa se o numero é repetido
          if (/(numero)[\s\S]+(already exists)/.test(e.detail)) {
            return ({ error: 'O número já existe' })
          }
          return e
        })


      return res.json(r);
    } else if (centro_resultado && centro_resultado.error) {
      return res.json(centro_resultado);
    } else {
      return res.json({ error: "CentroResultado não localizado" });
    }
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.body;
    const centro_resultado: any = await AppDataSource.manager
      .findOneBy(CentroResultado, { id })
      .catch((e) => {
        return { error: "Identificador inválido" };
      });
    if (centro_resultado && centro_resultado.id) {
      const r = await AppDataSource.manager
        .remove(CentroResultado, centro_resultado)
        .catch((e) => e.message);
      return res.json(r);
    } else if (centro_resultado && centro_resultado.error) {
      return res.json(centro_resultado);
    } else {
      return res.json({ error: "CentroResultado não localizado" });
    }
  }

  public async list(req: Request, res: Response): Promise<Response> {
    const centro_resultados = await AppDataSource.manager.find(CentroResultado);

    return res.json(centro_resultados);
  }
}

export default new CentroResultadoController();