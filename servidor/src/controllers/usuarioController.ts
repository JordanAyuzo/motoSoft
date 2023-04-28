import {Request,Response} from 'express';
import pool from '../database';
class UsuarioController
{
    public async create(req: Request, res: Response): Promise<void> {
        const resp = await pool.query("INSERT INTO usuario set ?",
        [req.body]);
        res.json(resp);
        }

    public async searchUser(req: Request, res: Response): Promise <void>{
        const resp = await pool.query("SELECT id FROM usuario WHERE correo = ? and clave = ?", [req.body.correo,req.body.clave]);
        res.json(resp[0]);
    }
    public async listOne(req: Request, res: Response): Promise <void>{
        const resp = await pool.query("SELECT * FROM usuario WHERE id = ?", [req.body.id]);
        res.json(resp[0]);
    }
    public async match(req: Request, res: Response): Promise <void>{
        const resp = await pool.query("SELECT correo FROM usuario WHERE correo = ?", [req.body.correo]);
        res.json(resp[0]);
    }

        
}
export const usuarioController = new UsuarioController();