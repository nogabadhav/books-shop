import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { errorRoute } from './layouts/error/error.route';
import { navbarRoute } from './layouts/navbar/navbar.route';
import { DEBUG_INFO_ENABLED } from 'app/app.constants';

import { UserRouteAccessService } from 'app/core/auth/user-route-access-service';
import { BasketRouteAccess } from 'app/core/auth/basket-route-access.service';

const LAYOUT_ROUTES = [navbarRoute, ...errorRoute];

@NgModule({
  imports: [
    RouterModule.forRoot(
      [
        {
          path: 'admin',
          data: {
            authorities: ['ROLE_ADMIN']
          },
          canActivate: [UserRouteAccessService],
          loadChildren: () => import('./admin/admin-routing.module').then(m => m.AdminRoutingModule)
        },
        {
          path: 'account',
          loadChildren: () => import('./account/account.module').then(m => m.AccountModule)
        },
        {
          path: 'book',
          loadChildren: () => import('./catagory/catagory.module').then(m => m.CatagoryModule)
        },
        {
          path: 'basket',
          canActivate: [BasketRouteAccess],
          loadChildren: () => import('./basket/basket.module').then(m => m.BasketModule)
        },
        ...LAYOUT_ROUTES
      ],
      { enableTracing: DEBUG_INFO_ENABLED }
    )
  ],
  exports: [RouterModule]
})
export class BooksShopAppRoutingModule {}
