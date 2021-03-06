import { Component, Input } from '@angular/core';
import { IBook } from 'app/core/book/book.model';
import { BookService } from 'app/core/book/book.service';
import { AccountService } from 'app/core/auth/account.service';
import { BookInfoModalService } from 'app/core/book/book-info-modal.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['books.scss']
})
export class BooksComponent {
  @Input() books: IBook[] = [];

  constructor(
    private bookService: BookService,
    private accountService: AccountService,
    private bookInfoModalService: BookInfoModalService
  ) {}

  addToBasket(book: IBook): void {
    this.bookService.addToBasket(book);
  }

  isAuthenticated(): boolean {
    return this.accountService.isAuthenticated();
  }

  showInfo(book: IBook): void {
    this.bookInfoModalService.open(book);
  }
}
