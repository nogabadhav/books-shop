import { Route } from '@angular/router';
import { CatagoryComponent } from 'app/catagory/catagory.component';

export const CATAGORY_ROUTE: Route = {
  path: 'category/:name',
  component: CatagoryComponent,
  data: {
    authorities: [],
    pageTitle: ''
  }
};
