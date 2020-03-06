import { Component, Input } from '@angular/core';
import { IBook } from 'app/core/book/book.model';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['books.scss']
})
export class BooksComponent {
  @Input() books: IBook[] = [];
}
