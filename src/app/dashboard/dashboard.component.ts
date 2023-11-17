import { Component, Inject } from '@angular/core';
import { AuthUser, SocketUrl, User } from '../auth/auth.data';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(
    @Inject(SocketUrl) public socketUrl: string,
    @Inject(AuthUser) public user: User,
  ) {}

  welcomeMessage = '';

  onWelcomeClick() {
    alert(`${this.welcomeMessage ? this.welcomeMessage : 'Welcome'} ${this.user.username}`);
  }

  stringifyUser() {
    return JSON.stringify(this.user, null, 2);
  }
}
