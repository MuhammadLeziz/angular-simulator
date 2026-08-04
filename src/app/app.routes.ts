import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutGuideComponent } from './pages/about-guide/about-guide.component';
import { TourProgramComponent } from './pages/tour-program/tour-program.component';
import { PriceComponent } from './pages/price/price.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'about-guide',
    component: AboutGuideComponent,
  },
  {
    path: 'tour-program',
    component: TourProgramComponent,
  },
  {
    path: 'price',
    component: PriceComponent,
  },
  {
    path: 'blog',
    component: BlogComponent,
  },
  {
    path: 'contacts',
    component: ContactsComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
