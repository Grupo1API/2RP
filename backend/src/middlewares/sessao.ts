import { Request, Response, NextFunction } from "express";
import * as jwt from "jsonwebtoken";

const jwt_key = "lbkjbefkjbwekfkewfk";

const sessao = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token: any = req.headers.authorization?.split(" ")[1];
    const decode = jwt.verify(token, jwt_key);
    next();
  } catch (error) {
    console.log(error);
  }
};

export default sessao;
