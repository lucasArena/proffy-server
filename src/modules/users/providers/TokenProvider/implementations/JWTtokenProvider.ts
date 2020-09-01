import jwt from 'jsonwebtoken';
import ITokenProvider from '../models/ITokenProvider';

import authConfig from '../../../../../config/auth';

class JWTTokenProvider implements ITokenProvider {
  public generate(): string {
    const token = jwt.sign({}, authConfig.jwt.secret, {
      expiresIn: authConfig.jwt.expiresIn,
    });

    return token;
  }

  public validate(token: string): boolean {
    try {
      jwt.verify(token, authConfig.jwt.secret);
      return true;
    } catch (err) {
      return false;
    }
  }
}

export default JWTTokenProvider;
