"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const LeilaoController_1 = __importDefault(require("../controllers/LeilaoController"));
const LeilaoRouter = (0, express_1.Router)();
LeilaoRouter.get('/leilao', LeilaoController_1.default.listarLeilao);
LeilaoRouter.post('/leilao', LeilaoController_1.default.criarLeilao);
LeilaoRouter.patch('/leilao/:id', LeilaoController_1.default.atualizarLeilao);
LeilaoRouter.delete('/laeila/:id', LeilaoController_1.default.deletarLeilao);
exports.default = LeilaoRouter;
