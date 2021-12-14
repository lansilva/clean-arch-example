import { PasswordAndConfirmPasswordAreNotSameError } from '@/application/errors';
import { Validator } from '@/application/validation';

export class PasswordValidator implements Validator {
  constructor(
    readonly password: string,
    readonly confirmPassword: string,
  ) {}

  validate(): Error | undefined {
    if (this.password !== this.confirmPassword) {
      return new PasswordAndConfirmPasswordAreNotSameError();
    }

    return undefined;
  }
}
