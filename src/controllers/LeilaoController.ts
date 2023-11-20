import { Leilao } from '@prisma/client'
import { Request, Response } from 'express'
import LeilaoServices from '../services/LeilaoServices'

class LeilaoController {
  constructor() {}

  async listarLeilao(req: Request, res: Response) {
    const result = await LeilaoServices.listarLeilao()
    if (result) {
      res.status(200).json({
        status: 'Leilao listado com sucesso!',
        leilao: result,
      })
    } else {
      res.status(200).json({
        status: 'erro',
      })
    }
  }
  async atualizarLeilao(req: Request, res: Response) {
    return res.send('Atualizar Leilao')
  }
  async criarLeilao(req: Request, res: Response) {
    const newLeilao: Leilao = req.body
    const result = await LeilaoServices.criarLeilao(newLeilao)
    if (result) {
      res.status(200).json({
        status: 'Leilao foi criado com sucesso!',
        leilao: result,
      })
    } else {
      res.status(200).json({
        status: 'erro',
      })
    }
  }

  async deletarLeilao(req: Request, res: Response) {
    const identificaco:number = parseInt(req.params.identificaco as string)
    try {
      await LeilaoServices.deletarLeilao(identificaco)
      res.status(200).json({
        status: 'Leilao deletado com sucesso!',
      })
    } catch (error) {
      res.status(200).json({
        status: 'erro',
      })
    }
  }
}

export default new LeilaoController();