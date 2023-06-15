import {Request, Response} from 'express';
import pool from '../database';

class RentaControllers {
    public async create(req: Request, res: Response): Promise<void> {
        const resp = await pool.query("INSERT INTO renta set ?",
            [req.body]);
        res.json(resp);
    }
}

export const rentaControllers = new RentaControllers();