import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-app';

  // user?: User | null;
  // constructor(private accountService: AccountService) {
  //   this.accountService.user.subscribe((x) => (this.user = x));
  // }

  // logout() {
  //   this.accountService.logout();
  // }
}
