import {Request, Response} from 'express';
import pool from '../database';

export class IncidenciaControllers {

    /**
     * Después de crear la incidencia, se tiene que enviar el correo de notificación al correo de administradores del
     * sistema.
     * @param req
     * @param res
     */
    public async create(req: Request, res: Response): Promise<void> {
        console.log("Enviando correo: ", req.body)
        //Insertando incidencia
        const resp = await pool.query("INSERT INTO incidencia set ?",
            [req.body]);

        //Enviar correo de notificación al correo de administradores del sistema.
        //correoAcceso(req.body);

        res.json(resp);
    }
}


export const incidenciaControllers = new IncidenciaControllers();