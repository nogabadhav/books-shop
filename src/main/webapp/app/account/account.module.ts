import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BooksShopSharedModule } from 'app/shared/shared.module';

import { SessionsComponent } from './sessions/sessions.component';
import { PasswordStrengthBarComponent } from './password/password-strength-bar.component';
import { RegisterComponent } from './register/register.component';
import { ActivateComponent } from './activate/activate.component';
import { PasswordComponent } from './password/password.component';
import { SettingsComponent } from './settings/settings.component';
import { accountState } from './account.route';

@NgModule({
  imports: [BooksShopSharedModule, RouterModule.forChild(accountState)],
  declarations: [
    ActivateComponent,
    RegisterComponent,
    PasswordComponent,
    PasswordStrengthBarComponent,
    SessionsComponent,
    SettingsComponent
  ]
})
export class AccountModule {}
