import { AuthService } from './../_services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  model: any = {};

  constructor(private authServise: AuthService) {}

  ngOnInit() {}

  login() {
    this.authServise.login(this.model).subscribe(
      (next) => {
        console.log('Logged in successfully!');
      },
      (error) => {
        console.log('Failed to log in!');
      }
    );
  }
}
