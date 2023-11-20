"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const UsuarioRoutes_1 = __importDefault(require("./routes/UsuarioRoutes"));
const LeilaoRoutes_1 = __importDefault(require("./routes/LeilaoRoutes"));
const LeilaoRoutes_2 = __importDefault(require("./routes/LeilaoRoutes"));
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
app.use('/api', UsuarioRoutes_1.default);
app.use('/api', LeilaoRoutes_1.default);
app.use('/api', LeilaoRoutes_2.default);
app.get('/', (req, res) => {
    res.send('Sistema Leiloeiro - ULL');
});
app.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`);
});
