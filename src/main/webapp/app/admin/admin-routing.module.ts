import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'orders',
        loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule),
        data: {
          pageTitle: 'מעקב הזמנות'
        }
      },
      {
        path: 'inventory',
        loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule),
        data: {
          pageTitle: 'ניהול מלאי'
        }
      }
    ])
  ]
})
export class AdminRoutingModule {}
