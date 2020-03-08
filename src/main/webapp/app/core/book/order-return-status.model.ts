import { IBook } from 'app/core/book/book.model';

export interface OrderReturnStatus {
  ok: boolean;
  book?: IBook;
}
