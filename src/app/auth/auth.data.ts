import { InjectionToken } from '@angular/core';
import { API_HOST } from '@genesislcap/foundation-utils';
import { getUser, User } from '@genesislcap/foundation-auth/user';

/**
 * Create a user reference for the application.
 */
export const authUser = getUser();

/**
 * Create an api host reference for the application.
 */
export const apiHost = API_HOST;

/**
 * Add to the Angular DI system (Optional, depends on the needs of your application).
 */
export const APIHost = new InjectionToken<string>('APIHost');
export const AuthUser = new InjectionToken<User>('AuthUser');
export const authProviders = [
  { provide: APIHost, useValue: apiHost },
  { provide: AuthUser, useValue: authUser }
];
/**
 * Re-export the user interface type of DI usage.
 */
export {
  User
}
