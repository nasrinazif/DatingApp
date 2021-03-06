import { AlertifyService } from './../_services/alertify.service';
import { AuthService } from './../_services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  model: any = {};

  constructor(public authServise: AuthService, private alertifty: AlertifyService, private router: Router) {}

  ngOnInit() {}

  login() {
    this.authServise.login(this.model).subscribe(
      (next) => {
        this.alertifty.success('Logged in successfully!');
        this.router.navigate(['members']);
      },
      (error) => {
        this.alertifty.error(error);
      }
    );
  }

  loggedIn(){
    return this.authServise.loggedIn();
  }

  logOut(){
    localStorage.removeItem('token');
    this.alertifty.message('Logged Out');
    this.router.navigate(['home']);
  }
}
