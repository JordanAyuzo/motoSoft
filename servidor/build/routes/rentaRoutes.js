"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const rentaControllers_1 = require("../controllers/rentaControllers");
class RentasRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.post('/', rentaControllers_1.rentaControllers.create);
        this.router.get('/list/:id', rentaControllers_1.rentaControllers.list);
        this.router.delete('/cancelar/:id', rentaControllers_1.rentaControllers.cancelar);
    }
}
const rentasRoutes = new RentasRoutes();
exports.default = rentasRoutes.router;
