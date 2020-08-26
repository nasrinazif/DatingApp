import { AlertifyService } from './../../_services/alertify.service';
import { AuthService } from './../../_services/auth.service';
import { UserService } from 'src/app/_services/user.service';
import { User } from './../../_models/user';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-member-card',
  templateUrl: './member-card.component.html',
  styleUrls: ['./member-card.component.css']
})
export class MemberCardComponent implements OnInit {
  @Input() user: User;

  constructor(private userService: UserService, private authService: AuthService, private alertify: AlertifyService) { }

  ngOnInit() {
  }

  sendLike(recipientId: number){
    const userId = this.authService.decodedToken.nameid;
    this.userService.sendLike(userId, recipientId).subscribe(
      (next) => {
        this.alertify.success('You liked ' + this.user.knownAs + ' !');
      },
      (error) => {
        this.alertify.error(error);
      }
    );
  }

}
