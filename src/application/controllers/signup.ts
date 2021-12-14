import { Controller } from '@/application/controllers';
import { badRequest, created, HttpResponse } from '@/application/helpers';
import { ValidationBuilder as Builder, Validator } from '@/application/validation';
import { IEmailValidator } from '@/domain/contracts/gateways';
import { AccountAlreadyExistError } from '@/domain/entities';
import { AddAccountUser } from '@/domain/usecases';

type HttpRequest = { name: string, email: string, password: string, passwordConfirmation: string }
type Model = Error | { accessToken?: string, name?: string }

export class SignUpController extends Controller {
  constructor(private readonly addAccountUser: AddAccountUser, private readonly emailValidator: IEmailValidator) {
    super();
  }

  async perform(request : HttpRequest): Promise<HttpResponse<Model>> {
    try {
      return created(await this.addAccountUser(request));
    } catch (error) {
      if (error instanceof AccountAlreadyExistError) return badRequest(error);
      throw error;
    }
  }

  override buildValidators({
    name, email, password, passwordConfirmation,
  }: HttpRequest): Validator[] {
    return [
      ...Builder.of({ value: name, fieldName: 'name' }).required().build(),
      ...Builder.of({ value: email, fieldName: 'email' }).required().isValidEmail(this.emailValidator).build(),
      ...Builder.of({ value: password, fieldName: 'password' }).required().build(),
      ...Builder.of({ value: passwordConfirmation, fieldName: 'passwordConfirmation' })
        .required()
        .passwordAndPasswordConfirmAreSame(password, passwordConfirmation).build(),
    ];
  }
}
