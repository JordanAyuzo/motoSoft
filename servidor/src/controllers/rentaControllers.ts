import {Request, Response} from 'express';
import pool from '../database';

class RentaControllers {
    public async create(req: Request, res: Response): Promise<void> {
        const resp = await pool.query("INSERT INTO renta set ?",
            [req.body]);
        res.json(resp);
    }

    public async list(req: Request, res: Response): Promise<void> {
        console.log("Buenos dias ", req.params.id)
        const resp = await pool.query("SELECT * FROM renta WHERE id_usuario = ?",
            [req.params.id]);
        console.log(resp)
        res.json(resp);
    }

    public async cancelar(req: Request, res: Response): Promise<void> {
        const resp = await pool.query("DELETE FROM renta WHERE id = ?",
            [req.params.id]);
        res.json(resp);
    }
}

export const rentaControllers = new RentaControllers();