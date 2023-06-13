import { Router } from 'express';
import { incidenciaControllers } from '../controllers/incidenciaControllers';
class IncidenciaRoutes
{
    public router: Router=Router();
    constructor()
    {
        this.config();
    }
    config() : void
    {
        this.router.put('/', incidenciaControllers.create)
        //this.router.get('/',(req,res) => res.send('probando ruta'));
    }
}
const incidenciaRoutes = new IncidenciaRoutes();
export default incidenciaRoutes.router;