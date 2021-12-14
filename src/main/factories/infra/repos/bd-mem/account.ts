import { BdMemAccountRepository } from '@/infra/repos/bd-mem/account-repository';

export const makeMemAccountRepo = (): BdMemAccountRepository => new BdMemAccountRepository();
