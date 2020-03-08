import { Route } from '@angular/router';
import { OrdersComponent } from 'app/admin/orders/orders.component';

export const ORDERS_ROUTE: Route = {
  path: '',
  component: OrdersComponent,
  data: {
    authorities: [],
    pageTitle: ''
  }
};
