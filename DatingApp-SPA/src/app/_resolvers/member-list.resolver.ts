import { catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { AlertifyService } from '../_services/alertify.service';
import { UserService } from '../_services/user.service';
import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { User } from '../_models/user';

@Injectable()
export class MemberListResolver implements Resolve<User[]> {
    pageNumber = 1;
    pageSize = 2;

    constructor(private userService: UserService,
                private route: Router,
                private alertify: AlertifyService){}

    resolve(route: ActivatedRouteSnapshot): Observable<User[]>{
        return this.userService.getUsers(this.pageNumber, this.pageSize).pipe(
            catchError(error => {
                this.alertify.error('Problem Retriving Data!');
                this.route.navigate(['/home']);
                return of(null);
            })
        );
    }
}
