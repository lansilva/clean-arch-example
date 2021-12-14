import { EncrypterHandler } from '@/infra/gateways';

export const makeEncrypterHandler = () : EncrypterHandler => new EncrypterHandler();
