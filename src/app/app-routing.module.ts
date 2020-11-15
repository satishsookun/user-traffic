import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/users/users.module').then(m => m.UsersModule),
  },
  {
    path: 'users',
    loadChildren: () => import('./modules/users/users.module').then(m => m.UsersModule),
  },
  {
    path: 'filter',
      loadChildren: () => import('./modules/users/users.module').then(m => m.UsersModule),
  },
  {
    path: 'waiting-time',
    loadChildren: () => import('./modules/user-filter/user-filter.module').then(m => m.UserFilterModule),
  },
  {
    path: 'ab-test',
    loadChildren: () => import('./modules/user-filter/user-filter.module').then(m => m.UserFilterModule),
  },
  {
    path: 'email-a',
    loadChildren: () => import('./modules/user-filter/user-filter.module').then(m => m.UserFilterModule),
  },
  {
    path: 'email-b',
    loadChildren: () => import('./modules/user-filter/user-filter.module').then(m => m.UserFilterModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
