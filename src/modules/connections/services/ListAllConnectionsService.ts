import { inject, injectable } from 'tsyringe';
import Connection from '../repositories/typeorm/entities/Connection';
import IConnectionsRepository from '../repositories/IConnectionsRepository';

interface ConnectionResponse {
  total: number;
  connections: Connection[];
}

@injectable()
class CountAllConnections {
  constructor(
    @inject('ConnectionsRepository')
    private connectionsRepository: IConnectionsRepository,
  ) { }

  public async execute(): Promise<ConnectionResponse> {
    const [connections, total] = await this.connectionsRepository.index();

    return { total, connections };
  }
}

export default CountAllConnections;
