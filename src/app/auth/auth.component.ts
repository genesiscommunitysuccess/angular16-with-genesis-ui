import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
import { configure } from '@genesislcap/foundation-auth/config';
import { authHostPath } from './auth-routing.module';

/**
 * Using the <zero-auth> version of the micro frontend which has all the UI assets pre setup with the zero design system.
 * We could also use <foundation-auth> here and completely tailor the UI. See the auth docs for more information.
 */
@Component({
  standalone: true,
  selector: 'app-auth',
  template: '<zero-auth></zero-auth>',
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AuthComponent {
  constructor(readonly router: Router) {
    /**
     * Configure the auth micro frontend.
     */
    configure({
      hostPath: authHostPath,
      omitRoutes: ['request-account'],
      postLoginRedirect: () => router.navigateByUrl('dashboard'),
      /**
       * Re-using the Angular logo from the cli generated src/app/app.component.html file.
       */
      logo: `
        content: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==);
        width: 90px;
      `,
      /**
       * You can customise the background much the same way.
       * background: `
       *   :host {
       *     background-image: url(./assets/background1.jpg);
       *   }
       * `
       */
    });
  }
}
