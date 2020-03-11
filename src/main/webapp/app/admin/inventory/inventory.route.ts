import { Route } from '@angular/router';
import { InventoryComponent } from 'app/admin/inventory/inventory.component';

export const INVENTORY_ROUTE: Route = {
  path: '',
  component: InventoryComponent,
  data: {
    authorities: [],
    pageTitle: ''
  }
};
