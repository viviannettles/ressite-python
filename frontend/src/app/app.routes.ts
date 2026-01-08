import { Routes } from '@angular/router';
import { RessiteHome } from './pages/ressite-home/ressite-home';
import { RessitePersonal } from './pages/ressite-personal/ressite-personal';
import { RessiteWork } from './pages/ressite-work/ressite-work';
import { RessiteError } from './pages/ressite-error/ressite-error';


export const routes: Routes = [
  {
   path: '',
   component: RessiteHome,
   title: 'Home Page',
  },
  {
   path: 'personal',
   loadComponent: () => import('./pages/ressite-personal/ressite-personal').then((m) => m.RessitePersonal),
   title: 'Personal Page',
  },
  {
   path: 'work',
   loadComponent: () => import('./pages/ressite-work/ressite-work').then((m) => m.RessiteWork),
   title: 'Work Experience Page',
  },
  {
   path: '**',
   loadComponent: () => import('./pages/ressite-error/ressite-error').then((m) => m.RessiteError),
   title: 'Error Page',
  },
];
