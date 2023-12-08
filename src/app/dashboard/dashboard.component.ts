import { Component, Inject } from '@angular/core';
import { getConnect } from '@genesislcap/foundation-comms';
import { APIHost, AuthUser, User } from '../auth/auth.data';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  private connect = getConnect();

  constructor(
    @Inject(APIHost) public apiHost: string,
    @Inject(AuthUser) public user: User,
  ) {}

  welcomeMessage = '';

  onWelcomeClick() {
    alert(`${this.welcomeMessage ? this.welcomeMessage : 'Welcome'} ${this.user.username}`);
  }

  stringifyUser() {
    return JSON.stringify(this.user, null, 2);
  }

  onToggleSocketClick = async (host = this.apiHost) => {
    if (this.connect.isConnected) {
      this.connect.disconnect();
      return;
    }
    await this.connect.connect(host);
  }
}
