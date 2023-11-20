import { PrismaClient, Usuario } from '@prisma/client'

const prisma = new PrismaClient()

class UsuarioServices {
  constructor() {}

  async listarUsuario() {
    try {
      const Usuario = await prisma.usuario.findMany()
      return Usuario
    } catch (error) {
      console.log(error)
    }
  }

  async criarUsuario(newUsuario: Usuario) {
    try {
      const usuario = await prisma.usuario.create({
        data: newUsuario,
      })
      return usuario
    } catch (error) {
      console.log(error)
    }
  }

  async atualizarUsuario(idusuario: number, nome: string, email: string, ) {
    try {
      const usuario = await prisma.usuario.update({
        where: { idusuario: idusuario },
        data: {
            idusuario: idusuario,
            nome: nome,
            email: email,
        },
      })
      return usuario
    } catch (error) {
      console.log(error)
    }
  }

  async deletarUsuario(idusuario: number) {
    try {
      await prisma.usuario.delete({
        where: { idusuario: idusuario },
      })
      return console.log('Usuario deletado')
    } catch (error) {
      console.log(error)
    }
  }
}

export default new UsuarioServices()