import { getRepository, Repository } from 'typeorm';
import IConnectionsRepository from '../IConnectionsRepository';
import createConnectionsProps from '../../interfaces/createConnectionsProps';
import Connection from './entities/Connection';

class ConnectionRepository implements IConnectionsRepository {
  private repository: Repository<Connection>;

  constructor() {
    this.repository = getRepository(Connection);
  }

  async index(): Promise<[Connection[], number]> {
    const connections = await this.repository.findAndCount();

    return connections;
  }

  async create({ user_id }: createConnectionsProps): Promise<Connection> {
    const connection = this.repository.create({ user_id });

    await this.repository.save(connection);

    return connection;
  }
}

export default ConnectionRepository;
