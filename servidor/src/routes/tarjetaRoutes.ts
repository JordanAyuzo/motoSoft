import { Router } from 'express';
import { tarjetaController } from '../controllers/tarjetaController';
class TarjetaRoutes
{
public router: Router=Router();
constructor()
{
this.config();
}
config() : void{
    this.router.post('/create', tarjetaController.create);
    this.router.post("/list",tarjetaController.list);
}
}
const tarjetaRoutes= new TarjetaRoutes();
export default tarjetaRoutes.router;
