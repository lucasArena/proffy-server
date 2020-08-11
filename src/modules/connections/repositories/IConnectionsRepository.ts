import createConnectionsProps from '../interfaces/createConnectionsProps';
import Connection from './typeorm/entities/Connection';

export default interface IConnectionsRepository {
  index(): Promise<[Connection[], number]>;
  create(createConnectionData: createConnectionsProps): Promise<Connection>;
}
