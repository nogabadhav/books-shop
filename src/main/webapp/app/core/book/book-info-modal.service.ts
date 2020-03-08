import { Injectable } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { BookInfoModalComponent } from 'app/shared/book-info/book-info.component';
import { IBook } from 'app/core/book/book.model';

@Injectable({ providedIn: 'root' })
export class BookInfoModalService {
  private isOpen = false;

  constructor(private modalService: NgbModal) {}

  open(book: IBook): void {
    if (this.isOpen) {
      return;
    }
    this.isOpen = true;
    const modalRef: NgbModalRef = this.modalService.open(BookInfoModalComponent);
    modalRef.componentInstance.book = book;
    modalRef.result.finally(() => (this.isOpen = false));
  }
}
