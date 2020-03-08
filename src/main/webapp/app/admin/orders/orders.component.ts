import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BookService } from 'app/core/book/book.service';
import { IOrder } from 'app/core/order/order.module';

@Component({
  selector: 'book-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['orders.component.scss']
})
export class OrdersComponent implements OnInit, OnDestroy {
  orders: IOrder[] = [];
  private subscription?: Subscription;

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.subscription = this.bookService.getOrders().subscribe(orders => (this.orders = orders));
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
