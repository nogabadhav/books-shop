export interface IBook {
  id?: any;
  name?: string;
  imageUrl?: string;
  price?: number;
  amount?: number;
  inventory?: number;
}

export class Book implements IBook {
  constructor(public id?: any, public name?: string, public imageUrl?: string, price?: number, amount?: number, inventory?: number) {}
}
