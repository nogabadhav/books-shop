import { NgModule } from '@angular/core';
import { BooksShopSharedModule } from 'app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { ORDERS_ROUTE } from 'app/admin/orders/orders.route';
import { OrdersComponent } from 'app/admin/orders/orders.component';

@NgModule({
  imports: [BooksShopSharedModule, RouterModule.forChild([ORDERS_ROUTE])],
  declarations: [OrdersComponent]
})
export class OrdersModule {}
