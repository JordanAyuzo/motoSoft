import { Router } from 'express';
import { motoController } from '../controllers/motoController';
class MotoRoutes{
    public router: Router=Router();
    constructor(){
        this.config();
    }
    config() : void{
        this.router.post('/create', motoController.create);
        this.router.post('/list', motoController.list);
        this.router.post('/listOne', motoController.listOne);
    }
}
const motoRoutes= new MotoRoutes();
export default motoRoutes.router;
