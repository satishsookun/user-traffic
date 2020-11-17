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
    loadChildren: () => import('./modules/waiting/waiting.module').then(m => m.WaitingModule),
  },
  {
    path: 'ab-test',
    loadChildren: () => import('./modules/ab-testing/ab-testing.module').then(m => m.AbTestingModule),
  },
  {
    path: 'email-a',
    loadChildren: () => import('./modules/email-a/email-a.module').then(m => m.EmailAModule),
  },
  {
    path: 'email-b',
    loadChildren: () => import('./modules/email-b/email-b.module').then(m => m.EmailBModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
