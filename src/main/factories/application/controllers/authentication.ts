import { makeAuthentication } from '@/main/factories/domain/usecases/authentication';
import { AuthenticationController } from '@/application/controllers';
import { makeEmailValidatorHandler } from '../../infra/gateways';

export const makeAuthenticationController = (): AuthenticationController => {
  const controller = new AuthenticationController(makeAuthentication(), makeEmailValidatorHandler());
  return controller;
};
