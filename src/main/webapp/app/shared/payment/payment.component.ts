import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, Validators } from '@angular/forms';
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
  errorMessage?: string;

  paymentForm = this.fb.group({
    creditCard: ['', [Validators.required]],
    cvv: ['', [Validators.required]],
    expirationDate: ['', [Validators.required]]
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
      const creditCard = this.paymentForm.get(['creditCard'])!.value;
      const cvv = this.paymentForm.get(['cvv'])!.value;
      const expirationDate = this.paymentForm.get(['expirationDate'])!.value;
      this.orderSubscription = this.bookService
        .pay(this.books, this.account.login, { creditCard, cvv, expirationDate })
        .subscribe(status => {
          if (status.ok) {
            this.activeModal.close();
            this.router.navigate(['']);
            this.alertService.success('ההזמנה התקבלה בהצלחה!');
          } else {
            this.errorMessage = status.message;
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
