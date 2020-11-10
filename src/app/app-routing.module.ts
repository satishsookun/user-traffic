import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserFilterComponent} from "./modules/user-filter/container/user-filter.component";
import {UsersComponent} from "./modules/users/container/users.component";

const routes: Routes = [
  {
    path: '',
    component: UsersComponent
  },
  {
    path: 'users',
    component: UsersComponent
  },
  {
    path: 'user-filter',
    component: UserFilterComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
