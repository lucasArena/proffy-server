import { inject, injectable } from 'tsyringe';
import IConnectionsRepository from '../repositories/IConnectionsRepository';
import createConnectionsProps from '../interfaces/createConnectionsProps';
import Connection from '../repositories/typeorm/entities/Connection';
import IUserRepository from '../../users/repositories/IUserRepository';
import AppError from '../../../shared/errors/AppError';

@injectable()
class CreateConnectionService {
  constructor(
    @inject('ConnectionsRepository')
    private connectionsRepository: IConnectionsRepository,
    @inject('UsersRepository')
    private usersRepository: IUserRepository,
  ) { }

  public async execute({
    user_id,
  }: createConnectionsProps): Promise<Connection> {
    const userExists = await this.usersRepository.findById(user_id);

    if (!userExists) {
      throw new AppError('User does not exists', 400);
    }

    const connections = await this.connectionsRepository.create({ user_id });

    return connections;
  }
}

export default CreateConnectionService;
