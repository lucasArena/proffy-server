import { Router } from 'express';

import classesRoutes from '../../modules/classes/routes/classes.routes';
import connectionsRoutes from '../../modules/connections/routes/connections.routes';

const routes = Router();

routes.use('/classes', classesRoutes);
routes.use('/connections', connectionsRoutes);

export default routes;
