"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const motoController_1 = require("../controllers/motoController");
class MotoRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.post('/create', motoController_1.motoController.create);
        this.router.post('/list', motoController_1.motoController.list);
        this.router.post('/listOne', motoController_1.motoController.listOne);
    }
}
const motoRoutes = new MotoRoutes();
exports.default = motoRoutes.router;
