import express, {Request, Response} from 'express';
import { ConcessionsController } from '../controllers/ConcessionsController';

const concessionsController=new ConcessionsController();

export const ConcessionRouter = express.Router({
    strict: true
});

ConcessionRouter.route('/concessions/show/:id').get(concessionsController.read);
ConcessionRouter.route('/concessions/add').post(concessionsController.create);
ConcessionRouter.route('/concessions/update/:id').put(concessionsController.update);
ConcessionRouter.route('/concessions/delete/:id').delete(concessionsController.delete);