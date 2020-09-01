import { container } from 'tsyringe';

import IHashProvider from './HashProvider/models/IHashProvider';
import BCryptHashProvider from './HashProvider/implementations/BCryptProvider';

import ITokenProvider from './TokenProvider/models/ITokenProvider';
import JWTtokenProvider from './TokenProvider/implementations/JWTtokenProvider';

container.registerSingleton<IHashProvider>(
  'BCryptHashProvider',
  BCryptHashProvider,
);

container.registerSingleton<ITokenProvider>(
  'JWTtokenProvider',
  JWTtokenProvider,
);
