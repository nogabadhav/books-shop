import { Component, OnDestroy, OnInit } from '@angular/core';
import { IBook } from 'app/core/book/book.model';
import { BookService } from 'app/core/book/book.service';
import { Subscription } from 'rxjs';
import { PaymentModalService } from 'app/core/payment/payment-modal.service';

@Component({
  selector: 'book-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['basket.component.scss']
})
export class BasketComponent implements OnInit, OnDestroy {
  books: IBook[] = [];
  private subscription?: Subscription;

  constructor(private bookService: BookService, private paymentModalService: PaymentModalService) {}

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

  price(): number {
    let sum = 0;
    this.books.forEach(b => (sum += (b.price || 0) * (b.amount || 0)));
    return sum;
  }

  pay(): void {
    this.paymentModalService.open();
  }
}
