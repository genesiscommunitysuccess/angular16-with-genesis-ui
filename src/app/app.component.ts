import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { authHostPath } from './auth/auth-routing.module';
import { authUser } from './auth/auth.data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular16-with-genesis-ui';

  constructor(private router: Router) {}

  async onLogout() {
    this.router.navigateByUrl(authHostPath);
  }

  isAuthenticated() {
    return authUser.isAuthenticated;
  }
}
