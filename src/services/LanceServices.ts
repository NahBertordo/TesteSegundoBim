import { PrismaClient, Lance } from '@prisma/client'

const prisma = new PrismaClient()

class LanceServices {
  constructor() {}

  async listarLance() {
    try {
      const lance = await prisma.lance.findMany()
      return lance
    } catch (error) {
      console.log(error)
    }
  }

  async criarLance(newLance: Lance) {
    try {
      const lance = await prisma.lance.create({
        data: newLance,
      })
      return lance
    } catch (error) {
      console.log(error)
    }
  }

  async atualizarLance(numlance: number, valor:number) {
    try {
      const lance = await prisma.lance.update({
        where: { numlance: numlance },
        data: {
            numlance: numlance,
            valor: valor,
        },
      })
      return lance
    } catch (error) {
      console.log(error)
    }
  }

  async deletarLance(numlance: number) {
    try {
      await prisma.lance.delete({
        where: { numlance: numlance },
      })
      return console.log('Lance deletado')
    } catch (error) {
      console.log(error)
    }
  }
}

export default new LanceServices()