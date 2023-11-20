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
class LeilaoServices {
    constructor() { }
    listarLeilao() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const leilao = yield prisma.leilao.findMany();
                return leilao;
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    criarLeilao(newLeilao) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const leilao = yield prisma.leilao.create({
                    data: newLeilao,
                });
                return leilao;
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    atualizarLeilao(identificaco, produto, preco, datalimite) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const leilao = yield prisma.leilao.update({
                    where: { indentificacao: identificaco },
                    data: {
                        indentificacao: identificaco,
                        produto: produto,
                        preco: preco,
                        datalimite: datalimite,
                    },
                });
                return leilao;
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    deletarLeilao(identificaco) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield prisma.leilao.delete({
                    where: { indentificacao: identificaco },
                });
                return console.log('Leilao deletado');
            }
            catch (error) {
                console.log(error);
            }
        });
    }
}
exports.default = new LeilaoServices();
