export interface IBook {
  id?: any;
  name?: string;
  imageUrl?: string;
  price?: number;
  amount?: number;
  inventory?: number;
  isBasket?: boolean;
  author?: { name: string };
  catagory?: { name: string };
}

export class Book implements IBook {
  constructor(
    public id?: any,
    public name?: string,
    public imageUrl?: string,
    public price?: number,
    public amount?: number,
    public inventory?: number,
    public isBasket?: boolean
  ) {}
}
