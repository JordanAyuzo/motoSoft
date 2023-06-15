import {Router} from 'express';
import {rentaControllers} from '../controllers/rentaControllers';

class RentasRoutes {
    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.post('/', rentaControllers.create);
    }
}

const rentasRoutes = new RentasRoutes();
export default rentasRoutes.router;
