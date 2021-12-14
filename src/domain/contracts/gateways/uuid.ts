export namespace UUIDGenerator {
  export type Output = string
}

export interface IUUIDGenerator {
  uuid: () => UUIDGenerator.Output
}
