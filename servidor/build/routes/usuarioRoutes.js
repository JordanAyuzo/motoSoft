"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuarioController_1 = require("../controllers/usuarioController");
class UsuarioRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', (req, res) => res.send('probando Usuario'));
        this.router.post('/create', usuarioController_1.usuarioController.create);
        this.router.post("/searchUser", usuarioController_1.usuarioController.searchUser);
        this.router.post("/listOne", usuarioController_1.usuarioController.listOne);
        this.router.post("/match", usuarioController_1.usuarioController.match);
    }
}
const usuarioRoutes = new UsuarioRoutes();
exports.default = usuarioRoutes.router;
