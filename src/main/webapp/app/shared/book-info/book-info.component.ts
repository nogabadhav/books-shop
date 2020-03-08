import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { IBook } from 'app/core/book/book.model';

@Component({
  selector: 'book-info-modal',
  templateUrl: './book-info.component.html',
  styleUrls: ['book-info.component.scss']
})
export class BookInfoModalComponent {
  @Input() book?: IBook;

  constructor(public activeModal: NgbActiveModal) {}
}
