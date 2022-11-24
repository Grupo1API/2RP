import { Request, Response, NextFunction } from "express";
import UsuariosrModel from "../models/UsuariosModel";

const saveUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const emailcheck = await UsuariosrModel.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (emailcheck) {
      return res.json(409).send("Authentication failed");
    }

    next();
  } catch (error) {
    console.log(error);
  }
};

export default saveUser;
