import { Response, Request } from 'express';
import { container } from 'tsyringe';

import ListAllConnectionsService from '../services/ListAllConnectionsService';
import CreateConnectionService from '../services/CreateConnectionService';

class ConnectionsController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listAllConnectionsService = container.resolve(
      ListAllConnectionsService,
    );

    const connections = await listAllConnectionsService.execute();

    return response.json(connections);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { user_id } = request.body;

    const createConnectionService = container.resolve(CreateConnectionService);

    const connection = await createConnectionService.execute({ user_id });

    return response.json(connection);
  }
}

export default ConnectionsController;
