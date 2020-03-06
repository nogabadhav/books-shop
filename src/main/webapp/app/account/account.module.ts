import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BooksShopSharedModule } from 'app/shared/shared.module';

import { RegisterComponent } from './register/register.component';
import { accountState } from './account.route';

@NgModule({
  imports: [BooksShopSharedModule, RouterModule.forChild(accountState)],
  declarations: [RegisterComponent]
})
export class AccountModule {}
