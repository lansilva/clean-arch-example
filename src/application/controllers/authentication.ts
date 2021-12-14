import { ValidationBuilder as Builder, Validator } from '@/application/validation';
import { IEmailValidator } from '@/domain/contracts/gateways';
import { AuthenticationError } from '@/domain/entities';
import { Authentication } from '@/domain/usecases';
import { HttpResponse, ok, unauthorized } from '@/application/helpers';
import { Controller } from '@/application/controllers';

type HttpRequest = { email: string, password: string }
type Model = { accessToken?: string, name?: string }

export class AuthenticationController extends Controller {
  constructor(private readonly authentication: Authentication, private readonly emailValidator: IEmailValidator) {
    super();
  }

  async perform(request : HttpRequest): Promise<HttpResponse<Model>> {
    try {
      return ok(await this.authentication(request));
    } catch (error) {
      if (error instanceof AuthenticationError) return unauthorized();
      throw error;
    }
  }

  override buildValidators({ email, password }: HttpRequest): Validator[] {
    return [
      ...Builder.of({ value: email, fieldName: 'email' }).required().isValidEmail(this.emailValidator).build(),
      ...Builder.of({ value: password, fieldName: 'password' }).required().build(),
    ];
  }
}
