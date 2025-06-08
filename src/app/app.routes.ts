import { Routes } from '@angular/router';
import { MainLayout } from './layouts/main-layout/main-layout';
import { Login } from './pages/login/login';
import { NotFound } from './pages/not-found/not-found';
import { OwnerSignup } from './pages/owner-signup/owner-signup';

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
    path: 'register',
    loadComponent: () => OwnerSignup,
    title: 'Create Account',
    pathMatch: 'full'
  },
  {
    path: 'pm',
    loadComponent: () => MainLayout,
    loadChildren: () => import('./layouts/layout.routes').then(m => m.layoutRoutes),
    data: { preload: true } // Preload this route
  },
  {
    path: '**',
    loadComponent: () => NotFound,
    title: 'Not Found',
    pathMatch: 'full'
  }
];
