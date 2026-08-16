import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () => import('../app/pages/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'about-guide',
    loadComponent: () =>
      import('../app/pages/about-guide/about-guide.component').then((m) => m.AboutGuideComponent),
  },
  {
    path: 'tour-program',
    loadComponent: () =>
      import('../app/pages/tour-program/tour-program.component').then(
        (m) => m.TourProgramComponent,
      ),
  },
  {
    path: 'price',
    loadComponent: () => import('../app/pages/price/price.component').then((m) => m.PriceComponent),
  },
  {
    path: 'blog',
    loadComponent: () => import('../app/pages/blog/blog.component').then((m) => m.BlogComponent),
  },
  {
    path: 'contacts',
    loadComponent: () =>
      import('../app/pages/contacts/contacts.component').then((m) => m.ContactsComponent),
  },
  {
    path: '**',
    loadComponent: () =>
      import('../app/pages/not-found/not-found.component').then((m) => m.NotFoundComponent),
  },
];
