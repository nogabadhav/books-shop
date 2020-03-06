export interface IUser {
  id?: any;
  login?: string;
  firstName?: string;
  lastName?: string;
  activated?: boolean;
  langKey?: string;
  authorities?: string[];
  password?: string;
}

export class User implements IUser {
  constructor(
    public id?: any,
    public login?: string,
    public firstName?: string,
    public lastName?: string,
    public activated?: boolean,
    public langKey?: string,
    public authorities?: string[],
    public password?: string
  ) {}
}
