export default interface ITokenProvider {
  generate(): string;
  validate(token: string): boolean;
}
