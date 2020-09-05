import { AuthService } from './../_services/auth.service';
import { Message } from './../_models/message';
import { catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { AlertifyService } from '../_services/alertify.service';
import { UserService } from '../_services/user.service';
import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { User } from '../_models/user';

@Injectable()
export class MessagesResolver implements Resolve<Message[]> {
    pageNumber = 1;
    pageSize = 6;
    messageContainer = 'Unread';

    constructor(private userService: UserService,
                private route: Router,
                private alertify: AlertifyService,
                private authService: AuthService){}

    resolve(route: ActivatedRouteSnapshot): Observable<Message[]>{
        return this.userService.getMessages(this.authService.decodedToken.nameid,
            this.pageNumber, this.pageSize, this.messageContainer)
            .pipe(
            catchError(error => {
                this.alertify.error('Problem Retriving Messages!');
                this.route.navigate(['/home']);
                return of(null);
            })
        );
    }
}
