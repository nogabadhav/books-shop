import { NgModule } from '@angular/core';
import { BooksShopSharedLibsModule } from './shared-libs.module';
import { AlertComponent } from './alert/alert.component';
import { AlertErrorComponent } from './alert/alert-error.component';
import { LoginModalComponent } from './login/login.component';
import { HasAnyAuthorityDirective } from './auth/has-any-authority.directive';
import { BooksComponent } from 'app/shared/books/books.component';
import { PaymentModalComponent } from 'app/shared/payment/payment.component';

@NgModule({
  imports: [BooksShopSharedLibsModule],
  declarations: [AlertComponent, AlertErrorComponent, LoginModalComponent, HasAnyAuthorityDirective, BooksComponent, PaymentModalComponent],
  entryComponents: [LoginModalComponent, PaymentModalComponent],
  exports: [
    BooksShopSharedLibsModule,
    AlertComponent,
    AlertErrorComponent,
    LoginModalComponent,
    HasAnyAuthorityDirective,
    BooksComponent,
    PaymentModalComponent
  ]
})
export class BooksShopSharedModule {}
