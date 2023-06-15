import {Request, Response} from 'express';
import pool from '../database';

class MotoController {
    public async create(req: Request, res: Response): Promise<void> {
        const resp = await pool.query("INSERT INTO moto set ?",
            [req.body]);
        res.json(resp);
    }

    public async list(req: Request, res: Response): Promise<void> {
        const resp = await pool.query("SELECT id,marca,modelo,descripcion FROM moto",
            [req.body]);
        res.json(resp);
    }

    public async listOne(req: Request, res: Response): Promise<void> {
        const resp = await pool.query("SELECT * FROM moto WHERE id = ?", [req.body.id]);
        res.json(resp[0]);
    }


}

export const motoController = new MotoController();