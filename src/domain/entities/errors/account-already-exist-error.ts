export class AccountAlreadyExistError extends Error {
  constructor() {
    super('Already exist an account with this email');
    this.name = 'AccountAlreadyExistError';
  }
}
