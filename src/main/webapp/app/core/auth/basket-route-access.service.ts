import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { LoginModalService } from 'app/core/login/login-modal.service';
import { AccountService } from 'app/core/auth/account.service';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class BasketRouteAccess implements CanActivate {
  constructor(private router: Router, private loginModalService: LoginModalService, private accountService: AccountService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    if (!this.accountService.isAuthenticated()) {
      this.router.navigate(['']);
      return of(false);
    }
    return of(true);
  }
}
