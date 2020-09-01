import { IUser } from '../interfaces/UserInterface';
import User from './typeorm/entities/User';

export default interface IUserRepository {
  findById(user_id: string): Promise<User | undefined>;
  findByEmail(email: string): Promise<User | undefined>;
  create(dataUser: IUser): Promise<User>;
}
