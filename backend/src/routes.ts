import { Router } from 'express'
import CentroResultadoController from './controller/CentroResultadoController';
import ClienteController from './controller/ClienteController';
import HoraExtraController from './controller/HoraExtraController';
import SobreavisoController from './controller/SobreavisoController';

const router = Router()

// Clientes
router.post('/clientes', ClienteController.create);
router.get('/clientes', ClienteController.findAll);
router.get('/clientes/:clienteId', ClienteController.findOne);
router.put('/clientes/:clienteId', ClienteController.update);
router.delete('/clientes/:clienteId', ClienteController.destroy);

// Centro de rasultados
router.post('/centro-de-resultados', CentroResultadoController.create);
router.get('/centro-de-resultados', CentroResultadoController.findAll);
router.get('/centro-de-resultados/:centroResultadoId', CentroResultadoController.findOne);
router.put('/centro-de-resultados/:centroResultadoId', CentroResultadoController.update);
router.delete('/centro-de-resultados/:centroResultadoId', CentroResultadoController.destroy);

// Horas extras
router.post('/horas-extras', HoraExtraController.create);
router.get('/horas-extras', HoraExtraController.findAll);
router.get('/horas-extras/:horaExtraId', HoraExtraController.findOne);
router.put('/horas-extras/:horaExtraId', HoraExtraController.update);
router.delete('/horas-extras/:horaExtraId', HoraExtraController.destroy);

// Sobreavisos
router.post('/sobreavisos', SobreavisoController.create);
router.get('/sobreavisos', SobreavisoController.findAll);
router.get('/sobreavisos/:sobreavisoId', SobreavisoController.findOne);
router.put('/sobreavisos/:sobreavisoId', SobreavisoController.update);
router.delete('/sobreavisos/:sobreavisoId', SobreavisoController.destroy);

export { router };