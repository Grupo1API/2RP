import { Router, Request, Response } from "express";
import UsuariosController from "../controller/UsuariosController";
import apontamentoHorasRoutes from "./ApontamentoHorasRoutes";
import centroDeResultados from "./CentroDeResultadosRoutes";
import classificacaoHoras from "./ClassificacaoHorasRoutes";
import clientes from "./ClientesRoutes";
import turnos from "./TurnosRoutes";
import usuarios from "./UsuariosRoutes";
import verbas from "./VerbasRoutes";

const router = Router();

router.use("/apontamento-horas", apontamentoHorasRoutes);
router.use("/centro-de-resultados", centroDeResultados);
router.use("/classificacao-horas", classificacaoHoras);
router.use("/clientes", clientes);
router.use("/turnos", turnos);
router.use("/usuarios", usuarios);
router.use("/verbas", verbas);

// login
router.post("/login", UsuariosController.login);

//aceita qualquer método HTTP ou URL
router.use((req: Request, res: Response) =>
  res.json({ error: "Requisição desconhecida" })
);

export default router;
