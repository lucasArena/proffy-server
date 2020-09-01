import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateSessionsService from '../service/CreateSessionsService';

class SessionsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const createSessionsService = container.resolve(CreateSessionsService);

    const { user, token } = await createSessionsService.execute({
      email,
      password,
    });

    return response.json({ user, token });
  }
}

export default SessionsController;
