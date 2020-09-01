import { Router } from 'express';

import classesRoutes from '../../modules/classes/routes/classes.routes';
import connectionsRoutes from '../../modules/connections/routes/connections.routes';
import usersRoutes from '../../modules/users/routes/users.route';
import sessionRoutes from '../../modules/users/routes/sessions.routes';

const routes = Router();

routes.use('/sessions', sessionRoutes);
routes.use('/users', usersRoutes);
routes.use('/classes', classesRoutes);
routes.use('/connections', connectionsRoutes);

export default routes;
