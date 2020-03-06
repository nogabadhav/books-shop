export interface IBook {
  id?: any;
  name?: string;
  imageUrl?: string;
}

export class Book implements IBook {
  constructor(public id?: any, public name?: string, public imageUrl?: string) {}
}
