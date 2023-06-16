import {Router} from 'express';
import {rentaControllers} from '../controllers/rentaControllers';

class RentasRoutes {
    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.post('/', rentaControllers.create);
        this.router.get('/list/:id', rentaControllers.list);
    }
}

const rentasRoutes = new RentasRoutes();
export default rentasRoutes.router;
