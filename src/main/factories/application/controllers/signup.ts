import { makeAddAccount } from '@/main/factories/domain/usecases/add-account';
import { SignUpController } from '@/application/controllers';
import { makeEmailValidatorHandler } from '@/main/factories/infra/gateways';

export const makeSignUpController = (): SignUpController => new SignUpController(makeAddAccount(), makeEmailValidatorHandler());
