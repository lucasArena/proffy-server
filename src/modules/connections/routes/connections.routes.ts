import { Router } from 'express';

import ConnectionsController from '../controllers/ConnectionsController';

const router = Router();
const connectionsController = new ConnectionsController();

router.get('/', connectionsController.index);
router.post('/', connectionsController.create);

export default router;
