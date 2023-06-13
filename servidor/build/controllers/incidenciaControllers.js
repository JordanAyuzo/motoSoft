"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.incidenciaControllers = exports.IncidenciaControllers = void 0;
const database_1 = __importDefault(require("../database"));
class IncidenciaControllers {
    /**
     * Después de crear la incidencia, se tiene que enviar el correo de notificación al correo de administradores del
     * sistema.
     * @param req
     * @param res
     */
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const correoAcceso = require('./incidencia');
            const resp = yield database_1.default.query("INSERT INTO incidencia set ?", [req.body]);
            //Enviar correo de notificación al correo de administradores del sistema.
            correoAcceso(req.body);
            res.json(resp);
        });
    }
}
exports.IncidenciaControllers = IncidenciaControllers;
exports.incidenciaControllers = new IncidenciaControllers();
