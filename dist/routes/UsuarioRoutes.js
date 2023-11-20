"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UsuarioController_1 = __importDefault(require("../controllers/UsuarioController"));
const UsuarioRouter = (0, express_1.Router)();
UsuarioRouter.get('/leilao', UsuarioController_1.default.listarUsuario);
UsuarioRouter.post('/leilao', UsuarioController_1.default.criarUsuario);
UsuarioRouter.patch('/leilao/:id', UsuarioController_1.default.atualizarUsuario);
UsuarioRouter.delete('/laeila/:id', UsuarioController_1.default.deletarUsuario);
exports.default = UsuarioRouter;
