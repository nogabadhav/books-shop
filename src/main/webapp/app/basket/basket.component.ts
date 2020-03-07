import { Component, OnDestroy, OnInit } from '@angular/core';
import { IBook } from 'app/core/book/book.model';
import { BookService } from 'app/core/book/book.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'book-basket',
  templateUrl: './basket.component.html'
})
export class BasketComponent implements OnInit, OnDestroy {
  books: IBook[] = [];
  private subscription?: Subscription;

  constructor(private bookService: BookService) {}

  deleteFromBasket(book: IBook): void {
    this.bookService.removeFromBasket(book);
  }

  ngOnInit(): void {
    this.subscription = this.bookService.getBasket().subscribe(books => (this.books = books));
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
