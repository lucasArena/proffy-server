import { Router } from 'express';

import ClassesController from '../controllers/ClassesController';

const router = Router();
const classesController = new ClassesController();

router.get('/', classesController.index);
router.post('/', classesController.create);

export default router;
