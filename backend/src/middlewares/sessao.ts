import { Request, Response, NextFunction } from "express";
import { Jwt } from "jsonwebtoken";

const sessao = async (req: Request, res: Response, next: NextFunction) => {
  try {
    console.log("aqui");
  } catch (error) {
    console.log(error);
  }
};

export default sessao;
