import jwt from 'jsonwebtoken';

var email = require("emailjs/email");

module.exports = (formulario: any) => {
    const token: string = jwt.sign(formulario.email, process.env.TOKEN_SECRET || 'prueba');
    console.log(formulario)
    let result
    var server = email.server.connect(
        {
            user: "rore021226@gs.utm.mx",
            password: "FVqODcY6yfULGtpZ",
            host: "smtp-relay.sendinblue.com",
            ssl: true,
        });
    var message: any = {};
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
            <a href="http://localhost:4200/incidencia/${token}" >Cambiar contraseña</a>
            
`
    };
    console.log(message)
    server.send(message, function (err: any, message: any) {
        console.log(err)
        if (err == null) {
            console.log(true)
            result = true
        }
        result = false
        return result
    });
    return result
}