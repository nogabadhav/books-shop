import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BookService } from 'app/core/book/book.service';
import { IBook } from 'app/core/book/book.model';
import { JhiAlertService } from 'ng-jhipster';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'book-inventory',
  templateUrl: './inventory.component.html',
  styles: ['node_modules/ngx-toastr/toastr.css']
})
export class InventoryComponent implements OnInit, OnDestroy {
  allBooks: IBook[] = [];
  books: IBook[] = [];
  private subscription?: Subscription;
  filter = '';

  constructor(private bookService: BookService, private toastr: ToastrService) {}

  ngOnInit(): void {
    this.subscription = this.bookService.getAll().subscribe(books => {
      this.books = books;
      this.allBooks = books;
    });
  }

  save(book: IBook): void {
    this.bookService.save(book);
    // this.toastr.success("הספר התעדכן בהצלחה");
  }

  filterBooks(): void {
    this.books = this.allBooks.filter(
      b =>
        !this.filter.length ||
        (b.name && b.name.includes(this.filter)) ||
        (b.catagory && b.catagory.name.includes(this.filter)) ||
        (b.author && b.author.name.includes(this.filter))
    );
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
