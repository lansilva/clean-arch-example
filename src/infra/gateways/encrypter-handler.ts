import { hash, compare } from 'bcrypt';
import { Compare, IEncrypter } from '@/domain/contracts/gateways';

const SALT = 12;

export class EncrypterHandler implements IEncrypter {
  async encrypt(input: string) : Promise<string> {
    const textCrypt = await hash(input, SALT);
    return textCrypt;
  }

  async compare(input: Compare.Input) : Promise<boolean> {
    const valid = await compare(input.text, input.encryptedText);
    return valid;
  }
}
