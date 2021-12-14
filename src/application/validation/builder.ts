import {
  Validator, Required, RequiredString, EmailValidator, PasswordValidator,
} from '@/application/validation';
import { IEmailValidator } from '@/domain/contracts/gateways';

export class ValidationBuilder {
  private constructor(
    private readonly value: any,
    private readonly fieldName?: string,
    private readonly validators: Validator[] = [],
  ) {}

  static of({ value, fieldName }: { value: any, fieldName?: string }): ValidationBuilder {
    return new ValidationBuilder(value, fieldName);
  }

  required(): ValidationBuilder {
    if (typeof this.value === 'string') {
      this.validators.push(new RequiredString(this.value, this.fieldName));
    } else {
      this.validators.push(new Required(this.value, this.fieldName));
    }
    return this;
  }

  isValidEmail(emailValidator: IEmailValidator) : ValidationBuilder {
    this.validators.push(new EmailValidator(emailValidator, this.value));
    return this;
  }

  passwordAndPasswordConfirmAreSame(password: string, confirmPassword: string) : ValidationBuilder {
    this.validators.push(new PasswordValidator(password, confirmPassword));

    return this;
  }

  build(): Validator[] {
    return this.validators;
  }
}
