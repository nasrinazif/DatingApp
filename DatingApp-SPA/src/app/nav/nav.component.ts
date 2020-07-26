import { AlertifyService } from './../_services/alertify.service';
import { AuthService } from './../_services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  model: any = {};

  constructor(private authServise: AuthService, private alertifty: AlertifyService) {}

  ngOnInit() {}

  login() {
    this.authServise.login(this.model).subscribe(
      (next) => {
        this.alertifty.success('Logged in successfully!');
      },
      (error) => {
        this.alertifty.error(error);
      }
    );
  }

  loggedIn(){
    const token = localStorage.getItem('token');
    return !!token;
  }

  logOut(){
    localStorage.removeItem('token');
    this.alertifty.message('Logged Out');
  }
}
