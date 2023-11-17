import { InjectionToken } from '@angular/core';
import { SOCKET_URL } from '@genesislcap/foundation-auth/env';
import { getUser, User } from '@genesislcap/foundation-auth/user';

/**
 * Create a user reference for the application.
 */
export const authUser = getUser();

/**
 * Create a web socket url reference for the application.
 */
export const socketUrl = SOCKET_URL;

/**
 * Add to the Angular DI system (Optional, depends on the needs of your application).
 */
export const SocketUrl = new InjectionToken<string>('SocketUrl');
export const AuthUser = new InjectionToken<User>('AuthUser');
export const authProviders = [
  { provide: SocketUrl, useValue: socketUrl },
  { provide: AuthUser, useValue: authUser }
];
/**
 * Re-export the user interface type of DI usage.
 */
export {
  User
}
