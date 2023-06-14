"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const incidenciaControllers_1 = require("../controllers/incidenciaControllers");
class IncidenciaRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.post('/', incidenciaControllers_1.incidenciaControllers.create);
    }
}
const incidenciaRoutes = new IncidenciaRoutes();
exports.default = incidenciaRoutes.router;
