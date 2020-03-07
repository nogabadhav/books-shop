import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { LoginModalService } from 'app/core/login/login-modal.service';
import { AccountService } from 'app/core/auth/account.service';
import { Account } from 'app/core/user/account.model';
import { IBook } from 'app/core/book/book.model';
import { BookService } from 'app/core/book/book.service';

@Component({
  selector: 'jhi-home',
  templateUrl: './home.component.html',
  styleUrls: ['home.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  account: Account | null = null;
  authSubscription?: Subscription;
  recommendedBooks: IBook[] = [];
  recommendedSubscription?: Subscription;

  constructor(private accountService: AccountService, private loginModalService: LoginModalService, private bookService: BookService) {}

  ngOnInit(): void {
    this.authSubscription = this.accountService.getAuthenticationState().subscribe(account => (this.account = account));
    this.recommendedSubscription = this.bookService
      .getRecommended()
      .subscribe(recommendedBooks => (this.recommendedBooks = recommendedBooks));
  }

  isAuthenticated(): boolean {
    return this.accountService.isAuthenticated();
  }

  login(): void {
    this.loginModalService.open();
  }

  ngOnDestroy(): void {
    if (this.authSubscription) {
      this.authSubscription.unsubscribe();
    }
    if (this.recommendedSubscription) {
      this.recommendedSubscription.unsubscribe();
    }
  }
}
