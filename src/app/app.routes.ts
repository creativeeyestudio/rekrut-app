import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'register',
    loadComponent: () => import('./pages/register/register.page').then( m => m.RegisterPage)
  },
  {
    path: 'profile',
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/profile/profile.page').then(m => m.ProfilePage)
      },
      {
        path: 'update',
        loadComponent: () => import('./pages/profile/update/update.page').then( m => m.UpdatePage)
      },
      {
        path: 'hobbies-update',
        loadComponent: () => import('./pages/profile/hobbies-update/hobbies-update.page').then( m => m.HobbiesUpdatePage)
      }
    ]
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.page').then( m => m.HomePage)
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact.page').then( m => m.ContactPage)
  },
  {
    path: 'notifications',
    loadComponent: () => import('./pages/notifications/notifications.page').then( m => m.NotificationsPage)
  },
  {
    path: 'entreprises',
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/entreprises/entreprises.page').then( m => m.EntreprisesPage)
      },
      {
        path: ':id',
        loadComponent: () => import('./pages/entreprises/infos/infos.page').then( m => m.InfosPage)
      },
    ]
  },  {
    path: 'offre',
    loadComponent: () => import('./pages/offre/offre.page').then( m => m.OffrePage)
  }

];
