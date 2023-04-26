import { Router } from 'express';
import { usuarioController } from '../controllers/usuarioController';
class UsuarioRoutes
{
public router: Router=Router();
constructor()
{
this.config();
}
config() : void
{
this.router.get('/',(req,res) => res.send('probando Usuario'));
this.router.post('/create', usuarioController.create);
}
}
const usuarioRoutes= new UsuarioRoutes();
export default usuarioRoutes.router;
