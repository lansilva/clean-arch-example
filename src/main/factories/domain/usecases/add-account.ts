import { setupAddAccount, AddAccountUser } from '@/domain/usecases';
import { makeUUIDHandler, makeJwtTokenHandler, makeEncrypterHandler } from '@/main/factories/infra/gateways';
import { makeMemAccountRepo } from '@/main/factories/infra/repos/bd-mem';

export const makeAddAccount = (): AddAccountUser => setupAddAccount(
  makeMemAccountRepo(),
  makeUUIDHandler(),
  makeEncrypterHandler(),
  makeJwtTokenHandler(),
);
