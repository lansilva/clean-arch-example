import { IAccountRepository } from '@/domain/contracts/repos';
import { ITokenGenerator, IUUIDGenerator, IEncrypter } from '@/domain/contracts/gateways';
import { Account, AccessToken, AccountAlreadyExistError } from '@/domain/entities';

type Input = { name: string, email: string, password: string, passwordConfirmation: string }
type Output = { accessToken: string, name: string }

export type AddAccountUser = (input: Input) => Promise<Output>
type Setup = (
  accountRepo: IAccountRepository,
  crypto: IUUIDGenerator,
  encrypter: IEncrypter,
  token: ITokenGenerator)
=> AddAccountUser

export const setupAddAccount : Setup = (accountRepo, crypto, encrypter, token) => async (input : Input) => {
  const accountExisting = await accountRepo.getByEmail(input.email);
  if (accountExisting) throw new AccountAlreadyExistError();

  const encryptedPassword = await encrypter.encrypt(input.password);
  const id = crypto.uuid();
  const account = new Account(id, input.name, input.email, encryptedPassword);
  await accountRepo.add(account);

  const accessToken = await token.generate({ key: account.id, expirationInMs: AccessToken.expirationInMs });

  return { accessToken, name: account.name };
};
