"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var email = require("emailjs/email");
module.exports = (formulario) => {
    const token = jsonwebtoken_1.default.sign(formulario.email, process.env.TOKEN_SECRET || 'prueba');
    console.log(formulario);
    let result;
    var server = email.server.connect({
        user: "rore021226@gs.utm.mx",
        password: "FVqODcY6yfULGtpZ",
        host: "smtp-relay.sendinblue.com",
        ssl: true,
    });
    var message = {};
    message = {
        from: "no-reply@indapura.com",
        to: formulario.email,
        bcc: "",
        subject: "Incidencia",
        encoding: 'utf-8',
        text: `
            Estimado administrador,
            se ha reportado una incidencia en el sistema con número de reporte : .
            Por favor, ingrese al sistema para darle seguimiento.
            Ingresar aquí el detalle de la incidencia
`
    };
    console.log(message);
    server.send(message, function (err, message) {
        console.log(err);
        if (err == null) {
            console.log(true);
            result = true;
        }
        result = false;
        return result;
    });
    return result;
};
