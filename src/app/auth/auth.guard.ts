import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { authHostPath } from './auth-routing.module';
import { authUser } from './auth.data';

export const AuthGuard: CanActivateFn = (route) => {
  /**
   * Inject router and user.
   */
  const router = inject(Router);
  /**
   * Let the user visit pages within auth freely, logout, change password etc.
   */
  if (route.routeConfig?.path?.includes(authHostPath)) {
    return true;
  }
  /**
   * Don't block them if they are already authenticated.
   */
  if (authUser.isAuthenticated) {
    return true;
  }
  /**
   * Redirect to auth otherwise.
   */
  return router.parseUrl(authHostPath);
};
