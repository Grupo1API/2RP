import { Router } from 'express';
import TurnosController from '../controller/TurnosController';
import UsuariosController from '../controller/UsuariosController';
import VerbasController from '../controller/VerbasController';
import ApontamentoHorasController from '../controller/ApontamentoHorasController';
import CentroDeResultadosController from '../controller/CentroDeResultadosController';
import ClientesController from '../controller/ClientesController';
import UsuariosAuth from '../middlewares/UsuariosAuth';

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

// Turnos
router.post('/turnos', TurnosController.create);
router.get('/turnos', TurnosController.findAll);
router.get('/turnos/:turnoId', TurnosController.findOne);
router.put('/turnos/:turnoId', TurnosController.update);
router.delete('/turnos/:turnoId', TurnosController.destroy);

// Usuarios
router.post('/signup',  UsuariosController.singup)
router.get('/usuarios', UsuariosController.findAll);
router.get('/usuarios/:usuarioId', UsuariosController.findOne);
router.put('/usuarios/:usuarioId', UsuariosController.update);
//router.delete('/usuarios/:usuarioId', UsuariosController.destroy);
//Gestor
router.get('/usuarios/gestores', UsuariosController.findAllGestor);
router.get('/gestores/:gestorId', UsuariosController.findOneGestor);
router.put('/usuarios/:gestorId', UsuariosController.updateGestor);
router.delete('/usuarios/:gestorId', UsuariosController.destroyGestor);

// Verbas
router.post('/verbas', VerbasController.create);
router.get('/verbas', VerbasController.findAll);
router.get('/verbas/:verbaId', VerbasController.findOne);
router.put('/verbas/:verbaId', VerbasController.update);
router.delete('/verbas/:verbaId', VerbasController.destroy);

// Login
router.post('/signup', UsuariosAuth, UsuariosController.singup);
router.post('/login', UsuariosController.login );

export { router };