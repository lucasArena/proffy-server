import { compare, hash } from 'bcryptjs';

import IHashProvider from '../models/IHashProvider';

class BCryptProvider implements IHashProvider {
  public generate(payload: string): Promise<string> {
    return hash(payload, 8);
  }

  public compare(payload: string, hashPayload: string): Promise<boolean> {
    return compare(payload, hashPayload);
  }
}

export default BCryptProvider;
