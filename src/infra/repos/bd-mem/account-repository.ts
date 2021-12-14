import { AddAccount, IAccountRepository } from '@/domain/contracts/repos';
import { Account } from '@/domain/entities';
import { UserAccountMock } from '@/infra/repos/bd-mem/mock/user-account-mock';

export class BdMemAccountRepository implements IAccountRepository {
  async add(input: AddAccount.Input) : Promise<Account> {
    const account = new Account(input.id, input.name, input.email, input.password);

    return account;
  }

  async getByEmail(input: string) : Promise<Account | null> {
    const account = input === UserAccountMock.user.email ? UserAccountMock.user : null;

    return account ? {
      id: account.id, name: account.name, email: account.email, password: account.password,
    } : null;
  }
}
