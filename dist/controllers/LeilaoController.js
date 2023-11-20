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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LeilaoServices_1 = __importDefault(require("../services/LeilaoServices"));
class LeilaoController {
    constructor() { }
    listarLeilao(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield LeilaoServices_1.default.listarLeilao();
            if (result) {
                res.status(200).json({
                    status: 'Leilao listado com sucesso!',
                    leilao: result,
                });
            }
            else {
                res.status(200).json({
                    status: 'erro',
                });
            }
        });
    }
    atualizarLeilao(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            return res.send('Atualizar Leilao');
        });
    }
    criarLeilao(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const newLeilao = req.body;
            const result = yield LeilaoServices_1.default.criarLeilao(newLeilao);
            if (result) {
                res.status(200).json({
                    status: 'Leilao foi criado com sucesso!',
                    leilao: result,
                });
            }
            else {
                res.status(200).json({
                    status: 'erro',
                });
            }
        });
    }
    deletarLeilao(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const identificacao = parseInt(req.params.identificacao);
            try {
                yield LeilaoServices_1.default.deletarLeilao(identificacao);
                res.status(200).json({
                    status: 'Leilao deletado com sucesso!',
                });
            }
            catch (error) {
                res.status(200).json({
                    status: 'erro',
                });
            }
        });
    }
}
exports.default = new LeilaoController();
