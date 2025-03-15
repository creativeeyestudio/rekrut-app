import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'fr',
    pathMatch: 'full',
  },
  {
    path: 'fr',
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/home/home.page').then((m) => m.HomePage),
      },
      {
        path: 'messagerie',
        children: [
          {
            path: '',
            loadComponent: () => import('./pages/messagerie/messagerie.page').then( m => m.MessageriePage)
          },
          {
            path: 'contact',
            loadComponent: () => import('./pages/contact/contact.page').then((m) => m.ContactPage),
          }
        ]
      },
      {
        path: 'register',
        loadComponent: () => import('./pages/register/register.page').then((m) => m.RegisterPage),
      },
      {
        path: 'entreprises',
        children: [
          {
            path: '',
            loadComponent: () => import('./pages/entreprises/entreprises.page').then((m) => m.EntreprisesPage),
          },
          {
            path: ':id',
            loadComponent: () => import('./pages/entreprises/infos/infos.page').then((m) => m.InfosPage),
          },
        ],
      },
      {
        path: 'profile',
        children: [
          {
            path: '',
            loadComponent: () => import('./pages/profile/profile.page').then((m) => m.ProfilePage),
          },
          {
            path: 'update',
            loadComponent: () => import('./pages/profile/update/update.page').then((m) => m.UpdatePage),
          },
          {
            path: 'hobbies-update',
            loadComponent: () => import('./pages/profile/hobbies-update/hobbies-update.page').then((m) => m.HobbiesUpdatePage),
          },
        ],
      },
      {
        path: 'offres',
        loadComponent: () => import('./pages/offres/offres.page').then( m => m.OffresPage)
      },
      {
        path: 'offre',
        loadComponent: () => import('./pages/offre/offre.page').then((m) => m.OffrePage),
      },
      {
        path: 'notifications',
        loadComponent: () => import('./pages/notifications/notifications.page').then((m) => m.NotificationsPage),
      },
      {
        path: 'upload',
        loadComponent: () => import('./pages/upload/upload.page').then((m) => m.UploadPage),
      },
      {
        path: 'report',
        loadComponent: () => import('./pages/report/report.page').then((m) => m.ReportPage),
      },
      {
        path: 'pdf-viewer',
        loadComponent: () => import('./pages/pdf-viewer/pdf-viewer.page').then( m => m.PdfViewerPage)
      },
      {
        path: 'skills-params',
        loadComponent: () => import('./pages/skills-params/skills-params.page').then( m => m.SkillsParamsPage)
      },
    ],
  },




];
