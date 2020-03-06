export class Account {
  constructor(
    public activated: boolean,
    public authorities: string[],
    public firstName: string,
    public langKey: string,
    public lastName: string,
    public login: string
  ) {}
}
