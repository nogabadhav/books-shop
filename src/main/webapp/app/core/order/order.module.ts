import { IBookOrder } from 'app/core/order/book-order.module';

export interface IOrder {
  status?: string;
  date?: Date;
  books: IBookOrder[];
  login?: string;
  price?: number;
}
