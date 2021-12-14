export namespace TokenGenerator {
  export type Input = {
    key: string
    expirationInMs: number
  }
  export type Output = string
}

export interface ITokenGenerator {
  generate: (input: TokenGenerator.Input) => Promise<TokenGenerator.Output>
}

export namespace TokenValidator {
  export type Input = { token: string }
  export type Output = string
}

export interface ITokenValidator {
  validate: (input: TokenValidator.Input) => Promise<TokenValidator.Output>
}
