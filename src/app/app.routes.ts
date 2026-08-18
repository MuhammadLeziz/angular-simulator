import { Routes } from '@angular/router';
import { postResolverResolver } from './features/posts/resolvers/post.resolver.resolver';
import { authGuard } from './features/auth/guards/auth.guard';
import { adminGuard } from './features/auth/guards/admin.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () =>
      import('../app/features/auth/components/login/login.component').then((m) => m.LoginComponent),
  },
  {
    path: 'home',
    loadComponent: () => import('../app/pages/home/home.component').then((m) => m.HomeComponent),
    canActivate: [authGuard],
  },
  {
    path: 'about-guide',
    loadComponent: () =>
      import('../app/pages/about-guide/about-guide.component').then((m) => m.AboutGuideComponent),
    canActivate: [authGuard],
  },
  {
    path: 'tour-program',
    loadComponent: () =>
      import('../app/pages/tour-program/tour-program.component').then(
        (m) => m.TourProgramComponent,
      ),
    canActivate: [authGuard],
  },
  {
    path: 'price',
    loadComponent: () => import('../app/pages/price/price.component').then((m) => m.PriceComponent),
    canActivate: [authGuard],
  },
  {
    path: 'blog',
    loadComponent: () => import('../app/pages/blog/blog.component').then((m) => m.BlogComponent),
    canActivate: [authGuard],
  },
  {
    path: 'contacts',
    loadComponent: () =>
      import('../app/pages/contacts/contacts.component').then((m) => m.ContactsComponent),
    canActivate: [authGuard],
  },
  {
    path: 'users',
    loadComponent: () =>
      import('../app/components/users/users.component').then((m) => m.UsersComponent),
    canActivate: [authGuard, adminGuard],
  },
  {
    path: 'posts',
    loadComponent: () =>
      import('../app/features/posts/components/posts/posts.component').then(
        (m) => m.PostsComponent,
      ),
    canActivate: [authGuard, adminGuard],
  },
  {
    path: 'posts/create',
    loadComponent: () =>
      import('../app/features/posts/components/post-create/post-create.component').then(
        (m) => m.PostCreateComponent,
      ),
    canActivate: [authGuard, adminGuard],
  },
  {
    path: 'posts/:id',
    loadComponent: () =>
      import('../app/features/posts/components/post-detail/post-detail.component').then(
        (m) => m.PostDetailComponent,
      ),
    resolve: {
      post: postResolverResolver,
    },
    canActivate: [authGuard, adminGuard],
  },
  {
    path: '**',
    loadComponent: () =>
      import('../app/pages/not-found/not-found.component').then((m) => m.NotFoundComponent),
    canActivate: [authGuard],
  },
];
