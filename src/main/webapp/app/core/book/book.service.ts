import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IBook } from 'app/core/book/book.model';
import { Observable } from 'rxjs';
import { SERVER_API_URL } from 'app/app.constants';

@Injectable({ providedIn: 'root' })
export class BookService {
  public resourceUrl = SERVER_API_URL + 'books';

  constructor(private http: HttpClient) {}

  getRecommended(): Observable<IBook[]> {
    return this.http.get<IBook[]>(`${this.resourceUrl}/recommended`);
  }

  getByCategory(name: string): Observable<IBook[]> {
    return this.http.get<IBook[]>(`${this.resourceUrl}/category/${name}`);
  }
}
