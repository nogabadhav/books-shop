import { Injectable } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { PaymentModalComponent } from 'app/shared/payment/payment.component';

@Injectable({ providedIn: 'root' })
export class PaymentModalService {
  private isOpen = false;

  constructor(private modalService: NgbModal) {}

  open(): void {
    if (this.isOpen) {
      return;
    }
    this.isOpen = true;
    const modalRef: NgbModalRef = this.modalService.open(PaymentModalComponent);
    modalRef.result.finally(() => (this.isOpen = false));
  }
}
