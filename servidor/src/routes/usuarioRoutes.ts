import { Router } from 'express';
import { usuarioController } from '../controllers/usuarioController';
class UsuarioRoutes
{
public router: Router=Router();
constructor()
{
this.config();
}
config() : void{
    this.router.get('/',(req,res) => res.send('probando Usuario'));
    this.router.post('/create', usuarioController.create);
    this.router.post("/searchUser",usuarioController.searchUser);
    this.router.post("/listOne",usuarioController.listOne);
    this.router.post("/match",usuarioController.match)
}
}
const usuarioRoutes= new UsuarioRoutes();
export default usuarioRoutes.router;
