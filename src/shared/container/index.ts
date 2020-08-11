import { container } from 'tsyringe';

import IUserRepository from '../../modules/users/repositories/IUserRepository';
import UserRepository from '../../modules/users/repositories/typeorm/UserRepository';
import IClassesRepository from '../../modules/classes/repositories/IClassesRepository';
import ClassesRepository from '../../modules/classes/repositories/typeorm/ClassesRepository';
import IClassesScheduleRepository from '../../modules/classes/repositories/IClassesScheduleRepository';
import ClassesScheduleRepository from '../../modules/classes/repositories/typeorm/ClassesScheduleRepository';
import IConnectionsRepository from '../../modules/connections/repositories/IConnectionsRepository';
import ConnectionRepository from '../../modules/connections/repositories/typeorm/ConnectionRepository';

container.registerSingleton<IUserRepository>('UsersRepository', UserRepository);
container.registerSingleton<IClassesRepository>(
  'ClassesRepository',
  ClassesRepository,
);

container.registerSingleton<IClassesScheduleRepository>(
  'ClassesScheduleRepository',
  ClassesScheduleRepository,
);

container.registerSingleton<IConnectionsRepository>(
  'ConnectionsRepository',
  ConnectionRepository,
);
