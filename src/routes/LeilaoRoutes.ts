import { Router } from "express";
import LeilaoController from '../controllers/LeilaoController'

const LeilaoRouter = Router();

LeilaoRouter.get('/leilao', LeilaoController.listarLeilao)
LeilaoRouter.post('/leilao', LeilaoController.criarLeilao)
LeilaoRouter.patch('/leilao/:id', LeilaoController.atualizarLeilao)
LeilaoRouter.delete('/laeila/:id', LeilaoController.deletarLeilao)

export default LeilaoRouter