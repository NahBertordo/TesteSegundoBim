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
const UsuarioServices_1 = __importDefault(require("../services/UsuarioServices"));
class UsuarioController {
    constructor() { }
    listarUsuario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield UsuarioServices_1.default.listarUsuario();
            if (result) {
                res.status(200).json({
                    status: 'Usuario listado com sucesso!',
                    usuario: result,
                });
            }
            else {
                res.status(200).json({
                    status: 'erro',
                });
            }
        });
    }
    atualizarUsuario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            return res.send('Atualizar Usuario');
        });
    }
    criarUsuario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const newUsuario = req.body;
            const result = yield UsuarioServices_1.default.criarUsuario(newUsuario);
            if (result) {
                res.status(200).json({
                    status: 'Usuario foi criado com sucesso!',
                    usuario: result,
                });
            }
            else {
                res.status(200).json({
                    status: 'erro',
                });
            }
        });
    }
    deletarUsuario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const idusuario = parseInt(req.params.idusuario);
            try {
                yield UsuarioServices_1.default.deletarUsuario(idusuario);
                res.status(200).json({
                    status: 'Usuario deletado com sucesso!',
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
exports.default = new UsuarioController();
