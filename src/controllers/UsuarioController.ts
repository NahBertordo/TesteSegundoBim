import { Usuario } from '@prisma/client'
import { Request, Response } from 'express'
import UsuarioServices from '../services/UsuarioServices'

class UsuarioController {
  constructor() {}

  async listarUsuario(req: Request, res: Response) {
    const result = await UsuarioServices.listarUsuario()
    if (result) {
      res.status(200).json({
        status: 'Usuario listado com sucesso!',
        usuario: result,
      })
    } else {
      res.status(200).json({
        status: 'erro',
      })
    }
  }
  async atualizarUsuario(req: Request, res: Response) {
    return res.send('Atualizar Usuario')
  }
  async criarUsuario(req: Request, res: Response) {
    const newUsuario: Usuario = req.body
    const result = await UsuarioServices.criarUsuario(newUsuario)
    if (result) {
      res.status(200).json({
        status: 'Usuario foi criado com sucesso!',
        usuario: result,
      })
    } else {
      res.status(200).json({
        status: 'erro',
      })
    }
  }

  async deletarUsuario(req: Request, res: Response) {
    const idusuario:number = parseInt(req.params.idusuario as string)
    try {
      await UsuarioServices.deletarUsuario(idusuario)
      res.status(200).json({
        status: 'Usuario deletado com sucesso!',
      })
    } catch (error) {
      res.status(200).json({
        status: 'erro',
      })
    }
  }
}

export default new UsuarioController();