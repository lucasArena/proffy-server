import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateUserService from '../service/CreateUserService';

class UsersController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, surname, email, password } = request.body;

    const createUserService = await container.resolve(CreateUserService);
    const user = await createUserService.execute({
      name,
      surname,
      email,
      password,
    });

    return response.json(user);
  }
}

export default UsersController;
