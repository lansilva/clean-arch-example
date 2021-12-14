import { EmailValidatorHandler } from '@/infra/gateways';

export const makeEmailValidatorHandler = () : EmailValidatorHandler => new EmailValidatorHandler();
