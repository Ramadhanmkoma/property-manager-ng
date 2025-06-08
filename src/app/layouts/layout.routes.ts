import { Routes } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';

export const layoutRoutes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    loadComponent: () => Dashboard,
    title: 'Dashboard',
    pathMatch: 'full'
  }
];
