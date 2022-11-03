import express, {Request, Response} from 'express';
import { MineController } from '../controllers/MineController';

const mineController=new MineController();

export const router = express.Router({
    strict: true
});

router.route('/mine/show/:id').get(mineController.read);
router.route('/mine/add').post(mineController.create);
router.route('/mine/update/:id').put(mineController.update);
router.route('/mine/delete/:id').delete(mineController.delete);