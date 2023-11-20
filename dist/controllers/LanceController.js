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
const LanceServices_1 = __importDefault(require("../services/LanceServices"));
class LanceController {
    constructor() { }
    listarLance(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield LanceServices_1.default.listarLance();
            if (result) {
                res.status(200).json({
                    status: 'Lances listados com sucesso!',
                    lance: result,
                });
            }
            else {
                res.status(200).json({
                    status: 'erro',
                });
            }
        });
    }
    atualizarLance(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            return res.send('Atualizar Lances');
        });
    }
    criarLance(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const newLance = req.body;
            const result = yield LanceServices_1.default.criarLance(newLance);
            if (result) {
                res.status(200).json({
                    status: 'Lance foi criado com sucesso!',
                    lance: result,
                });
            }
            else {
                res.status(200).json({
                    status: 'erro',
                });
            }
        });
    }
    deletarLance(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const numlance = parseInt(req.params.numlance);
            try {
                yield LanceServices_1.default.deletarLance(numlance);
                res.status(200).json({
                    status: 'Lance deletado com sucesso!',
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
exports.default = new LanceController();
