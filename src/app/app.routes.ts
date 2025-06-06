import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { NotFound } from './pages/not-found/not-found';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadComponent: () => Login,
    title: 'Login',
    pathMatch: 'full'
  },
  {
    path: '**',
    loadComponent: () => NotFound,
    title: 'Not Found',
    pathMatch: 'full'
  }
];
