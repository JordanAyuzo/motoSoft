import {Request,Response} from 'express';
import pool from '../database';
class TarjetaController{
    public async create(req: Request, res: Response): Promise<void> {
        const resp = await pool.query("INSERT INTO tarjeta set ?",
        [req.body]);
        res.json(resp);
    }

    public async list(req: Request, res: Response): Promise<void> {
        const resp = await pool.query("SELECT * FROM tarjeta WHERE id = ?", [req.body.id]);
        res.json(resp);
    }

}
export const tarjetaController = new TarjetaController();