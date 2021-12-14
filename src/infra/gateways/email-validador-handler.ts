import validator from 'validator';
import { IEmailValidator } from '@/domain/contracts/gateways';

export class EmailValidatorHandler implements IEmailValidator {
  isValid(email: string): boolean {
    return validator.isEmail(email);
  }
}
