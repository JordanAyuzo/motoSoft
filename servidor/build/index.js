"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const usuarioRoutes_1 = __importDefault(require("./routes/usuarioRoutes"));
const motoRoutes_1 = __importDefault(require("./routes/motoRoutes"));
const tarjetaRoutes_1 = __importDefault(require("./routes/tarjetaRoutes"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const incidenciaRoutes_1 = __importDefault(require("./routes/incidenciaRoutes"));
const rentaRoutes_1 = __importDefault(require("./routes/rentaRoutes"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use((0, morgan_1.default)('dev'));
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    routes() {
        this.app.use(indexRoutes_1.default);
        this.app.use('/api/usuario', usuarioRoutes_1.default);
        this.app.use('/api/moto', motoRoutes_1.default);
        this.app.use('/api/tarjeta', tarjetaRoutes_1.default);
        this.app.use('/api/incidencia', incidenciaRoutes_1.default);
        this.app.use('/api/renta', rentaRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port', this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
