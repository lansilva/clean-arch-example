import { setupAuthentication, Authentication } from '@/domain/usecases';
import { makeJwtTokenHandler, makeEncrypterHandler } from '@/main/factories/infra/gateways';
import { makeMemAccountRepo } from '@/main/factories/infra/repos/bd-mem';

export const makeAuthentication = (): Authentication => setupAuthentication(
  makeMemAccountRepo(),
  makeEncrypterHandler(),
  makeJwtTokenHandler(),
);
