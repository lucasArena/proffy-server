import { inject, injectable } from 'tsyringe';

import { IUser } from '../interfaces/UserInterface';
import IUserRepository from '../repositories/IUserRepository';

@injectable()
class CreateUserService {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository,
  ) { }

  public async execute({ name, avatar, whatsapp, bio }: IUser): Promise<IUser> {
    const user = await this.userRepository.create({
      name,
      whatsapp,
      bio,
      avatar,
    });

    return user;
  }
}

export default CreateUserService;
