import { AppDataSource } from "../app-data-source";
import { Request, Response } from "express";
import { Projeto } from "../entity/Projeto";

class ProjetoController {
  public async find(req: Request, res: Response): Promise<Response> {
    const { nome, numero } = req.body;
    const projeto = await AppDataSource.manager.findOneBy(Projeto, {
      nome,
      numero,
    });
    if (projeto) 
      return res.json(projeto);
    return res.json({ error: "Dados inválidos" });
  }

  public async create(req: Request, res: Response): Promise<Response> {
    const { nome, numero } = req.body;
    const projeto = await AppDataSource.manager
      .save(Projeto, { nome, numero }).catch((e) => {
        // testa se o numero é repetido
        if (/(numero)[\s\S]+(already exists)/.test(e.detail)) {
          return { error: 'O número já existe' }
        }
        return e
      })
    
    return res.json(projeto);
  }

  public async update(req: Request, res: Response): Promise<Response> {
    const { id, nome, numero } = req.body;
    const projeto: any = await AppDataSource.manager
      .findOneBy(Projeto, { id })
      .catch((e) => {
        return { error: "Identificador inválido" };
      });
    if (projeto && projeto.id) {
      projeto.nome = nome;
      projeto.numero = numero;
      const r = await AppDataSource.manager
        .save(Projeto, projeto).catch((e) => {
          // testa se o numero é repetido
          if (/(numero)[\s\S]+(already exists)/.test(e.detail)) {
            return ({ error: 'O número já existe' })
          }
          return e
        })


      return res.json(r);
    } else if (projeto && projeto.error) {
      return res.json(projeto);
    } else {
      return res.json({ error: "Projeto não localizado" });
    }
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.body;
    const projeto: any = await AppDataSource.manager
      .findOneBy(Projeto, { id })
      .catch((e) => {
        return { error: "Identificador inválido" };
      });
    if (projeto && projeto.id) {
      const r = await AppDataSource.manager
        .remove(Projeto, projeto)
        .catch((e) => e.message);
      return res.json(r);
    } else if (projeto && projeto.error) {
      return res.json(projeto);
    } else {
      return res.json({ error: "Projeto não localizado" });
    }
  }

  public async list(req: Request, res: Response): Promise<Response> {
    const projetos = await AppDataSource.manager.find(Projeto);

    return res.json(projetos);
  }
}

export default new ProjetoController();