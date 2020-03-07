import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IBook } from 'app/core/book/book.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { SERVER_API_URL } from 'app/app.constants';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class BookService {
  private resourceUrl = SERVER_API_URL + 'books';
  private basket: BehaviorSubject<IBook[]> = new BehaviorSubject<IBook[]>([]);

  constructor(private http: HttpClient) {}

  private initBooks(books: IBook[]): IBook[] {
    for (let b of books) {
      b.amount = 1;
      let find = this.basket.getValue().find(book => book.id === b.id);
      if (find) {
        b.isBasket = true;
      }
    }
    return books;
  }

  getRecommended(): Observable<IBook[]> {
    return this.http.get<IBook[]>(`${this.resourceUrl}/recommended`).pipe(map(books => this.initBooks(books)));
  }

  getByCategory(name: string): Observable<IBook[]> {
    return this.http.get<IBook[]>(`${this.resourceUrl}/category/${name}`).pipe(map(books => this.initBooks(books)));
  }

  pay(bookOrders: IBook[], userLogin: string): void {
    this.http.post(`${this.resourceUrl}/order`, { bookOrders, userLogin });
  }

  addToBasket(book: IBook): void {
    book.isBasket = true;
    this.basket.next([...this.basket.getValue(), book]);
  }

  getBasket(): Observable<IBook[]> {
    return this.basket.asObservable();
  }

  removeFromBasket(book: IBook): void {
    book.isBasket = false;
    this.basket.next(this.remove(this.basket.getValue(), book));
  }

  remove<T>(myArray: T[], item: T): T[] {
    const index = myArray.indexOf(item, 0);
    if (index > -1) {
      myArray.splice(index, 1);
    }
    return myArray;
  }
}
