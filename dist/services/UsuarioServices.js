"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
class UsuarioServices {
    constructor() { }
    listarUsuario() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const Usuario = yield prisma.usuario.findMany();
                return Usuario;
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    criarUsuario(newUsuario) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const usuario = yield prisma.usuario.create({
                    data: newUsuario,
                });
                return usuario;
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    atualizarUsuario(idusuario, nome, email) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const usuario = yield prisma.usuario.update({
                    where: { idusuario: idusuario },
                    data: {
                        idusuario: idusuario,
                        nome: nome,
                        email: email,
                    },
                });
                return usuario;
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    deletarUsuario(idusuario) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield prisma.usuario.delete({
                    where: { idusuario: idusuario },
                });
                return console.log('Usuario deletado');
            }
            catch (error) {
                console.log(error);
            }
        });
    }
}
exports.default = new UsuarioServices();
