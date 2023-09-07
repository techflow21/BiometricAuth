import { Component } from '@angular/core';
import { User } from 'src/app/shared/_models/user';
import { AccountService } from 'src/app/shared/_services/account.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  user?: User | null;
  isLoggedIn: boolean = true;

  constructor(private accountService: AccountService) {
    this.accountService.user.subscribe((x) => (this.user = x));
  }

  logout() {
    this.accountService.logout();
  }
}
