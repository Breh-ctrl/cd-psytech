import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then((m) => m.LoginPage),
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then(m => m.HomePage),
  },

    {
    path: 'login',
    loadComponent: () => import('./login/login.page').then(m => m.LoginPage),
  },
      {
    path: 'menu',
    loadComponent: () => import('./menu/menu.page').then(m => m.MenuPage),
  },
    {
    path: 'suporte',
    loadComponent: () => import('./suporte/suporte.page').then(m => m.SuportePage),
  },
];