export namespace Encrypter {
  export type Input = string
  export type Output = string
}

export namespace Compare {
  export type Input = {
    text: string,
    encryptedText: string
  }
  export type Output = boolean
}

export interface IEncrypter {
  encrypt: (input: Encrypter.Input) => Promise<Encrypter.Output>
  compare: (input: Compare.Input) => Promise<Compare.Output>
}
