import { PrismaClient, Leilao } from '@prisma/client'

const prisma = new PrismaClient()

class LeilaoServices {
  constructor() {}

  async listarLeilao() {
    try {
      const leilao = await prisma.leilao.findMany()
      return leilao
    } catch (error) {
      console.log(error)
    }
  }

  async criarLeilao(newLeilao: Leilao) {
    try {
      const leilao = await prisma.leilao.create({
        data: newLeilao,
      })
      return leilao
    } catch (error) {
      console.log(error)
    }
  }

  async atualizarLeilao(identificaco: number, produto: string, preco: number, datalimite: string) {
    try {
      const leilao = await prisma.leilao.update({
        where: { indentificacao: identificaco },
        data: {
            indentificacao: identificaco,
            produto: produto,
            preco: preco,
            datalimite: datalimite,
        },
      })
      return leilao
    } catch (error) {
      console.log(error)
    }
  }

  async deletarLeilao(identificaco: number) {
    try {
      await prisma.leilao.delete({
        where: { indentificacao: identificaco },
      })
      return console.log('Leilao deletado')
    } catch (error) {
      console.log(error)
    }
  }
}

export default new LeilaoServices()