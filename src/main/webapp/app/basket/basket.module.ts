import { NgModule } from '@angular/core';
import { BooksShopSharedModule } from 'app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { BASKET_ROUTE } from 'app/basket/basket.route';
import { BasketComponent } from 'app/basket/basket.component';

@NgModule({
  imports: [BooksShopSharedModule, RouterModule.forChild([BASKET_ROUTE])],
  declarations: [BasketComponent]
})
export class BasketModule {}
