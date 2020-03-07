import { Component, OnDestroy, OnInit } from '@angular/core';
import { AccountService } from 'app/core/auth/account.service';
import { LoginModalService } from 'app/core/login/login-modal.service';
import { IBook } from 'app/core/book/book.model';
import { BookService } from 'app/core/book/book.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Params } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'book-category',
  templateUrl: './catagory.component.html',
  styleUrls: ['catagory.component.scss']
})
export class CatagoryComponent implements OnInit, OnDestroy {
  name = '';
  books: IBook[] = [];
  subscription?: Subscription;

  constructor(
    private accountService: AccountService,
    private loginModalService: LoginModalService,
    private bookService: BookService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.subscription = this.route.params
      .pipe(
        switchMap((params: Params) => {
          this.name = params['name'];
          return this.bookService.getByCategory(this.name);
        })
      )
      .subscribe(books => (this.books = books));
  }

  isAuthenticated(): boolean {
    return this.accountService.isAuthenticated();
  }

  login(): void {
    this.loginModalService.open();
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
