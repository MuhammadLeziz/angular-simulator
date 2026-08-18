import {
  ApplicationConfig,
  inject,
  provideAppInitializer,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeuix/themes/aura';
import { httpInterceptorInterceptor } from './core/interceptors/http.interceptor.interceptor';
import { backendInterceptorInterceptor } from './core/interceptors/backend.interceptor.interceptor';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { DialogService } from 'primeng/dynamicdialog';
import { authInterceptor } from './features/auth/interceptors/auth.interceptor';
import { AuthService } from './features/auth/services/auth.service';

export const appConfig: ApplicationConfig = {
  providers: [
    DialogService,
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideZoneChangeDetection(),
    providePrimeNG({
      theme: {
        preset: Aura,
        options: {
          darkModeSelector: '.dark',
        },
      },
    }),
    provideHttpClient(
      withInterceptors([
        httpInterceptorInterceptor,
        backendInterceptorInterceptor,
        authInterceptor,
      ]),
    ),
    provideAnimationsAsync(),
    provideAppInitializer(() => {
      const authService = inject(AuthService);
      return authService.getMe();
    }),
  ],
};
