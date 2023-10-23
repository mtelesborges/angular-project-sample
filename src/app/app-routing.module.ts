import { NgModule, inject } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './guards';

const routes: Routes = [
  {
    path: '',
    children: [],
    canActivate: [() => inject(AuthGuard).canActivate()]
  },
  {
    path: 'login',
    loadComponent: () => import('./modules/login/login.component').then(component => component.LoginComponent)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
