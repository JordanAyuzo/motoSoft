import {Request,Response} from 'express';
import pool from '../database';
class UsuarioController
{
    public async create(req: Request, res: Response): Promise<void> {
        const resp = await pool.query("INSERT INTO usuario set ?",
        [req.body]);
        res.json(resp);
        }
        
}
export const usuarioController = new UsuarioController();