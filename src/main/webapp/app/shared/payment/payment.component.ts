import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AccountService } from 'app/core/auth/account.service';
import { Account } from 'app/core/user/account.model';
import { BookService } from 'app/core/book/book.service';
import { IBook } from 'app/core/book/book.model';
import { Router } from '@angular/router';
import { JhiAlertService } from 'ng-jhipster';

@Component({
  selector: 'payment-modal',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentModalComponent implements OnInit, OnDestroy {
  private authSubscription?: Subscription;
  private account: Account | null = null;
  private basketSubscription?: Subscription;
  private books: IBook[] = [];
  private orderSubscription?: Subscription;
  outOfStockBook?: IBook;

  paymentForm = this.fb.group({
    creditCard: [''],
    cvv: ['']
  });

  constructor(
    public activeModal: NgbActiveModal,
    private fb: FormBuilder,
    private accountService: AccountService,
    private bookService: BookService,
    private router: Router,
    private alertService: JhiAlertService
  ) {}

  pay(): void {
    if (this.account) {
      this.orderSubscription = this.bookService.pay(this.books, this.account.login).subscribe(status => {
        if (status.ok) {
          this.activeModal.close();
          this.router.navigate(['']);
          this.alertService.success('ההזמנה התקבלה בהצלחה!');
        } else {
          this.outOfStockBook = status.book;
        }
      });
    }
  }

  ngOnInit(): void {
    this.authSubscription = this.accountService.getAuthenticationState().subscribe(account => (this.account = account));
    this.basketSubscription = this.bookService.getBasket().subscribe(books => (this.books = books));
  }

  ngOnDestroy(): void {
    if (this.authSubscription) {
      this.authSubscription.unsubscribe();
    }
    if (this.basketSubscription) {
      this.basketSubscription.unsubscribe();
    }
    if (this.orderSubscription) {
      return this.orderSubscription.unsubscribe();
    }
  }
}
