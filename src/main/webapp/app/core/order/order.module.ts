import { IBookOrder } from 'app/core/order/book-order.module';

export interface IOrder {
  id?: number;
  status?: string;
  date?: string;
  books: IBookOrder[];
  login?: string;
  price?: number;
}
