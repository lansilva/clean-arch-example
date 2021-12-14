export class RequiredFieldError extends Error {
  constructor(fieldName?: string) {
    const message = fieldName === undefined
      ? 'Field required'
      : `The field ${fieldName} is required`;
    super(message);
    this.name = 'RequiredFieldError';
  }
}

export class InvalidEmailError extends Error {
  constructor() {
    super('Email invalid');
    this.name = 'InvalidEmailError';
  }
}

export class PasswordAndConfirmPasswordAreNotSameError extends Error {
  constructor() {
    super('The passwords entered do not match');
    this.name = 'PasswordAndConfirmPasswordAreNotSameError';
  }
}
