"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tarjetaController_1 = require("../controllers/tarjetaController");
class TarjetaRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.post('/create', tarjetaController_1.tarjetaController.create);
        this.router.post("/list", tarjetaController_1.tarjetaController.list);
    }
}
const tarjetaRoutes = new TarjetaRoutes();
exports.default = tarjetaRoutes.router;
