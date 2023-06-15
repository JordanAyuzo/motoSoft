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
    }
}
const rentasRoutes = new RentasRoutes();
exports.default = rentasRoutes.router;