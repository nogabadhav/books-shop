import { Routes } from '@angular/router';

import { activateRoute } from './activate/activate.route';
import { passwordRoute } from './password/password.route';
import { registerRoute } from './register/register.route';
import { sessionsRoute } from './sessions/sessions.route';
import { settingsRoute } from './settings/settings.route';

const ACCOUNT_ROUTES = [activateRoute, passwordRoute, registerRoute, sessionsRoute, settingsRoute];

export const accountState: Routes = [
  {
    path: '',
    children: ACCOUNT_ROUTES
  }
];
