import { Router } from "express";
import LanceController from '../controllers/LanceController'

const LanceRouter = Router();

LanceRouter.get('/aluno', LanceController.listarLance)
LanceRouter.post('/aluno', LanceController.criarLance)
LanceRouter.patch('/aluno/:id', LanceController.atualizarLance)
LanceRouter.delete('/aluno/:id', LanceController.deletarLance)

export default LanceRouter