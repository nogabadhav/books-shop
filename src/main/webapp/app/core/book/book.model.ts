export interface IBook {
  id?: any;
  name?: string;
  imageUrl?: string;
  price?: number;
}

export class Book implements IBook {
  constructor(public id?: any, public name?: string, public imageUrl?: string, price?: number) {}
}
