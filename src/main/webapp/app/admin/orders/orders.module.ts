import { NgModule } from '@angular/core';
import { BooksShopSharedModule } from 'app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { ORDERS_ROUTE } from 'app/admin/orders/orders.route';
import { OrdersComponent } from 'app/admin/orders/orders.component';
import { OrderStatusPipe } from 'app/core/order/order-status.pipe';

@NgModule({
  imports: [BooksShopSharedModule, RouterModule.forChild([ORDERS_ROUTE])],
  declarations: [OrdersComponent, OrderStatusPipe]
})
export class OrdersModule {}
