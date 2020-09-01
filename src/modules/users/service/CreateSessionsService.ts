import { injectable, inject } from 'tsyringe';

import UserRepository from '../repositories/typeorm/UserRepository';
import User from '../repositories/typeorm/entities/User';
import AppError from '../../../shared/errors/AppError';
import IHashProvider from '../providers/HashProvider/models/IHashProvider';
import ITokenProvider from '../providers/TokenProvider/models/ITokenProvider';

interface CreateSessionsProps {
  email: string;
  password: string;
}

interface Response {
  user: User;
  token: string;
}

@injectable()
class CreateSessionsService {
  constructor(
    @inject('UsersRepository') private userRepository: UserRepository,
    @inject('JWTtokenProvider') private tokenProvider: ITokenProvider,
    @inject('BCryptHashProvider') private hashProvider: IHashProvider,
  ) { }

  public async execute({
    email,
    password,
  }: CreateSessionsProps): Promise<Response> {
    const user = await this.userRepository.findByEmail(email);

    if (!user) {
      throw new AppError('Email/password not found', 401);
    }

    const isPasswordMatch = await this.hashProvider.compare(
      password,
      user.password,
    );

    if (!isPasswordMatch) {
      throw new AppError('Email/password not found', 401);
    }

    const token = this.tokenProvider.generate();

    return { user, token };
  }
}

export default CreateSessionsService;
