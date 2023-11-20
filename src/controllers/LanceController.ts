import { Lance } from '@prisma/client'
import { Request, Response } from 'express'
import LanceServices from '../services/LanceServices'

class LanceController {
  constructor() {}

  async listarLance(req: Request, res: Response) {
    const result = await LanceServices.listarLance()
    if (result) {
      res.status(200).json({
        status: 'Lances listados com sucesso!',
        lance: result,
      })
    } else {
      res.status(200).json({
        status: 'erro',
      })
    }
  }
  async atualizarLance(req: Request, res: Response) {
    return res.send('Atualizar Lances')
  }
  async criarLance(req: Request, res: Response) {
    const newLance: Lance = req.body
    const result = await LanceServices.criarLance(newLance)
    if (result) {
      res.status(200).json({
        status: 'Lance foi criado com sucesso!',
        lance: result,
      })
    } else {
      res.status(200).json({
        status: 'erro',
      })
    }
  }

  async deletarLance(req: Request, res: Response) {
    const numlance:number = parseInt(req.params.numlance as string)
    try {
      await LanceServices.deletarLance(numlance)
      res.status(200).json({
        status: 'Lance deletado com sucesso!',
      })
    } catch (error) {
      res.status(200).json({
        status: 'erro',
      })
    }
  }
}

export default new LanceController();