import {Router} from 'express';
import {incidenciaControllers} from '../controllers/incidenciaControllers';

class IncidenciaRoutes {
    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.post('/', incidenciaControllers.create)
    }
}

const incidenciaRoutes = new IncidenciaRoutes();
export default incidenciaRoutes.router;