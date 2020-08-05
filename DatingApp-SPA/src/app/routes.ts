<<<<<<< HEAD
import { MemberListResolver } from './_resolvers/member-list.resolver';
=======
>>>>>>> 329b2a282ba160d1f821c1bed4b7c5929b094568
import { MemberDetailResolver } from './_resolvers/member-detail.resolver';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { ListsComponent } from './lists/lists.component';
import { MessagesComponent } from './messages/messages.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { HomeComponent } from './home/home.component';
import { Routes } from '@angular/router';
import { AuthGuard } from './_guards/auth.guard';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
<<<<<<< HEAD
      { path: 'members', component: MemberListComponent, resolve: {users: MemberListResolver} },
=======
      { path: 'members', component: MemberListComponent },
>>>>>>> 329b2a282ba160d1f821c1bed4b7c5929b094568
      { path: 'members/:id', component: MemberDetailComponent, resolve: {user: MemberDetailResolver}},
      { path: 'messages', component: MessagesComponent },
      { path: 'lists', component: ListsComponent }
    ],
  },

  { path: '**', redirectTo: '', pathMatch: 'full' },
];
