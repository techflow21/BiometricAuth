import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/_models/user';
import { AccountService } from 'src/app/shared/_services/account.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})

export class DashboardComponent implements OnInit {
  title = 'dashboard';
  user: User | null;

// Biometric variables
  public username: String | undefined = '';
  public isLoading: Boolean = false;
  public isAuthenticated: Boolean = false;
  public appId: string = environment.passageAppId;

  constructor(private accountService: AccountService){
    this.user = this.accountService.userValue;
  }

  ngOnInit(){
    this.isLoading = true;
    this.accountService.isLoggedIn().then((result) => {
      if (result) {
        this.isLoading = this.accountService.isLoading;
        this.isAuthenticated = this.accountService.isAuthenticated;
        this.username = this.accountService.username;
      } else {
        this.isLoading = false;
        this.isAuthenticated = false;
        this.username = '';
      }
    })
}
}