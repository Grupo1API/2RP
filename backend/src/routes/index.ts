import { Router, Request, Response } from "express";
import UsuariosController from "../controller/UsuariosController";
import sessao from "../middlewares/sessao";
import apontamentoHorasRoutes from "./ApontamentoHorasRoutes";
import centroDeResultados from "./CentroDeResultadosRoutes";
import classificacaoHoras from "./ClassificacaoHorasRoutes";
import clientes from "./ClientesRoutes";
import turnos from "./TurnosRoutes";
import usuarios from "./UsuariosRoutes";
import verbas from "./VerbasRoutes";

const router = Router();

// login
router.post("/login", UsuariosController.login);

router.use("/apontamento-horas", sessao, apontamentoHorasRoutes);
router.use("/centro-de-resultados", sessao, centroDeResultados);
router.use("/classificacao-horas", sessao, classificacaoHoras);
router.use("/clientes", sessao, clientes);
router.use("/turnos", sessao, turnos);
router.use("/usuarios", sessao, usuarios);
router.use("/verbas", sessao, verbas);

//aceita qualquer método HTTP ou URL
router.use((req: Request, res: Response) =>
  res.json({ error: "Requisição desconhecida" })
);

export default router;
