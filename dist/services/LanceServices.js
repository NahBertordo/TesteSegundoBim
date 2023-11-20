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
class LanceServices {
    constructor() { }
    listarLance() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const lance = yield prisma.lance.findMany();
                return lance;
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    criarLance(newLance) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const lance = yield prisma.lance.create({
                    data: newLance,
                });
                return lance;
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    atualizarLance(numlance, valor) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const lance = yield prisma.lance.update({
                    where: { numlance: numlance },
                    data: {
                        numlance: numlance,
                        valor: valor,
                    },
                });
                return lance;
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    deletarLance(numlance) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield prisma.lance.delete({
                    where: { numlance: numlance },
                });
                return console.log('Lance deletado');
            }
            catch (error) {
                console.log(error);
            }
        });
    }
}
exports.default = new LanceServices();
