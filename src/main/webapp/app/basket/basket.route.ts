import { Route } from '@angular/router';
import { BasketComponent } from 'app/basket/basket.component';

export const BASKET_ROUTE: Route = {
  path: '',
  component: BasketComponent,
  data: {
    authorities: [],
    pageTitle: ''
  }
};
