import { getRepository, Repository } from 'typeorm';
import IUserRepository from '../IUserRepository';
import { IUser } from '../../interfaces/UserInterface';
import User from './entities/User';

class UserRepository implements IUserRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  public async findById(user_id: string): Promise<User | undefined> {
    const user = await this.repository.findOne(user_id);

    return user;
  }

  public async create(dataUser: IUser): Promise<User> {
    const user = this.repository.create(dataUser);

    await this.repository.save(user);

    return user;
  }
}

export default UserRepository;
