import { Router } from 'express';
import ApontamentoHorasController from '../controller/ApontamentoHorasController';
import CentroDeResultadosController from '../controller/CentroDeResultadosController';
import ClientesController from '../controller/ClientesController';
import ColaboradoresController from '../controller/ColaboradoresController';
import GestoresController from '../controller/GestoresController';
import ProjetosController from '../controller/ProjetosController';
import TurnosController from '../controller/TurnosController';
import UsuariosController from '../controller/UsuariosController';
import VerbasController from '../controller/VerbasController';
import UserAuth from '../middlewares/UserAuth';

const router = Router();

// Apontamento horas
router.post('/apontamento-horas', ApontamentoHorasController.create);
router.get('/apontamento-horas', ApontamentoHorasController.findAll);
router.get('/apontamento-horas/:apontamentoHoraId', ApontamentoHorasController.findOne);
router.put('/apontamento-horas/:apontamentoHoraId', ApontamentoHorasController.update);
router.delete('/apontamento-horas/:apontamentoHoraId', ApontamentoHorasController.destroy);

// Centro de resultados
router.post('/centro-de-resultados', CentroDeResultadosController.create);
router.get('/centro-de-resultados', CentroDeResultadosController.findAll);
router.get('/centro-de-resultados/:centroDeResultadoId', CentroDeResultadosController.findOne);
router.put('/centro-de-resultados/:centroDeResultadoId', CentroDeResultadosController.update);
router.delete('/centro-de-resultados/:centroDeResultadoId', CentroDeResultadosController.destroy);

// Clientes
router.post('/clientes', ClientesController.create);
router.get('/clientes', ClientesController.findAll);
router.get('/clientes/:clienteId', ClientesController.findOne);
router.put('/clientes/:clienteId', ClientesController.update);
router.delete('/clientes/:clienteId', ClientesController.destroy);

// Colaborados
router.post('/colaboradores', ColaboradoresController.create);
router.get('/colaboradores', ColaboradoresController.findAll);
router.get('/colaboradores/:colaboradorId', ColaboradoresController.findOne);
router.put('/colaboradores/:colaboradorId', ColaboradoresController.update);
router.delete('/colaboradores/:colaboradorId', ColaboradoresController.destroy);

// Gestores
router.post('/gestores', GestoresController.create);
router.get('/gestores', GestoresController.findAll);
router.get('/gestores/:gestorId', GestoresController.findOne);
router.put('/gestores/:gestorId', GestoresController.update);
router.delete('/gestores/:gestorId', GestoresController.destroy);

// Projetos
router.post('/projetos', ProjetosController.create);
router.get('/projetos', ProjetosController.findAll);
router.get('/projetos/:projetoId', ProjetosController.findOne);
router.put('/projetos/:projetoId', ProjetosController.update);
router.delete('/projetos/:projetoId', ProjetosController.destroy);

// Turnos
router.post('/turnos', TurnosController.create);
router.get('/turnos', TurnosController.findAll);
router.get('/turnos/:turnoId', TurnosController.findOne);
router.put('/turnos/:turnoId', TurnosController.update);
router.delete('/turnos/:turnoId', TurnosController.destroy);

// Usuarios
router.post('/usuarios', UsuariosController.create);
router.get('/usuarios', UsuariosController.findAll);
router.get('/usuarios/:usuarioId', UsuariosController.findOne);
router.put('/usuarios/:usuarioId', UsuariosController.update);
router.delete('/usuarios/:usuarioId', UsuariosController.destroy);

// Verbas
router.post('/verbas', VerbasController.create);
router.get('/verbas', VerbasController.findAll);
router.get('/verbas/:verbaId', VerbasController.findOne);
router.put('/verbas/:verbaId', VerbasController.update);
router.delete('/verbas/:verbaId', VerbasController.destroy);

// Login
router.post('/signup', UserAuth, UsuariosController.singup);
router.post('/login', UsuariosController.login );

export { router };