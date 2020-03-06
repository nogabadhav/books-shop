export interface IUser {
  id?: any;
  login?: string;
  firstName?: string;
  lastName?: string;
  activated?: boolean;
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
    public authorities?: string[],
    public password?: string
  ) {}
}
