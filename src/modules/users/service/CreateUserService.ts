import { inject, injectable } from 'tsyringe';

import { IUser } from '../interfaces/UserInterface';
import IUserRepository from '../repositories/IUserRepository';
import AppError from '../../../shared/errors/AppError';
import IHashProvider from '../providers/HashProvider/models/IHashProvider';

@injectable()
class CreateUserService {
  constructor(
    @inject('UsersRepository')
    private userRepository: IUserRepository,
    @inject('BCryptHashProvider')
    private hashProvider: IHashProvider,
  ) { }

  public async execute({
    name,
    avatar,
    surname,
    email,
    password,
    whatsapp,
    bio,
  }: IUser): Promise<IUser> {
    const isEmailExists = await this.userRepository.findByEmail(email);

    if (isEmailExists) {
      throw new AppError('Email already exists', 400);
    }

    const hashPassword = await this.hashProvider.generate(password);

    const user = await this.userRepository.create({
      name,
      surname,
      email,
      password: hashPassword,
      whatsapp,
      bio,
      avatar,
    });

    return user;
  }
}

export default CreateUserService;
