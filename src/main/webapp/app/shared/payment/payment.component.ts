import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AccountService } from 'app/core/auth/account.service';
import { Account } from 'app/core/user/account.model';
import { BookService } from 'app/core/book/book.service';
import { IBook } from 'app/core/book/book.model';
import { Router } from '@angular/router';

@Component({
  selector: 'payment-modal',
  templateUrl: './payment.component.html'
})
export class PaymentModalComponent implements OnInit, OnDestroy {
  error = false;
  private authSubscription?: Subscription;
  private account: Account | null = null;
  private basketSubscription?: Subscription;
  private books: IBook[] = [];

  paymentForm = this.fb.group({
    creditCard: [''],
    cvv: [''],
    expire: ['']
  });

  constructor(
    public activeModal: NgbActiveModal,
    private fb: FormBuilder,
    private accountService: AccountService,
    private bookService: BookService,
    private router: Router
  ) {}

  pay(): void {
    if (this.account) {
      this.bookService.pay(this.books, this.account.login);
      this.activeModal.close();
      this.router.navigate(['']);
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
  }
}
