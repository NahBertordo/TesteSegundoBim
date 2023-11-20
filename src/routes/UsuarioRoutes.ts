import { Router } from "express";
import UsuarioController from '../controllers/UsuarioController'

const UsuarioRouter = Router();

UsuarioRouter.get('/leilao', UsuarioController.listarUsuario)
UsuarioRouter.post('/leilao', UsuarioController.criarUsuario)
UsuarioRouter.patch('/leilao/:id', UsuarioController.atualizarUsuario)
UsuarioRouter.delete('/laeila/:id', UsuarioController.deletarUsuario)

export default UsuarioRouter