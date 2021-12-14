import { Account } from '@/domain/entities';

export namespace AddAccount {
  export type Input = { id: string, name: string, email: string, password: string }
}

export interface IAccountRepository {
  add: (input: AddAccount.Input) => Promise<Account>
  getByEmail: (input: string) => Promise<Account | null>
}
