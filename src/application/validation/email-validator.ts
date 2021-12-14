import { InvalidEmailError } from '@/application/errors';
import { Validator } from '@/application/validation';
import { IEmailValidator } from '@/domain/contracts/gateways';

export class EmailValidator implements Validator {
  constructor(private readonly emailValidator: IEmailValidator, readonly email: string) {}

  validate(): Error | undefined {
    if (!this.emailValidator.isValid(this.email)) {
      return new InvalidEmailError();
    }

    return undefined;
  }
}
