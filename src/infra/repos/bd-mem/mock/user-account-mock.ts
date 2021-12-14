import { Account } from '@/infra/repos/bd-mem/entities/user-account';

export abstract class UserAccountMock {
  public static user: Account = {
    id: '39620d28-e90d-428b-8039-96e996f478cf',
    email: 'phfreitas@ciandt.com',
    name: 'Paulo Henrique',
    password: '$2b$12$QvILSHLMCbP/bq8asLJ5bO4sSa9Cwfm6apxRhEAo35Mvo9p/ziGwS',
  }
}
