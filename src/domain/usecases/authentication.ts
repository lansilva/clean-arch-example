import { IAccountRepository } from '@/domain/contracts/repos';
import { ITokenGenerator, IEncrypter } from '@/domain/contracts/gateways';
import { AccessToken, AuthenticationError } from '@/domain/entities';

type Input = { email: string, password: string }
type Output = { accessToken: string, name: string }

export type Authentication = (input: Input) => Promise<Output>
type Setup = (accountRepo: IAccountRepository, encrypter: IEncrypter, token: ITokenGenerator) => Authentication

export const setupAuthentication : Setup = (accountRepo, encrypter, token) => async (input : Input) => {
  const account = await accountRepo.getByEmail(input.email);

  if (account === null) throw new AuthenticationError();

  const passwordValid = await encrypter.compare({ text: input.password, encryptedText: account.password });

  if (!passwordValid) {
    throw new AuthenticationError();
  }

  const accessToken = await token.generate({ key: account.id, expirationInMs: AccessToken.expirationInMs });
  return { accessToken, name: account.name };
};
