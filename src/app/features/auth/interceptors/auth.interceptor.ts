import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { catchError, switchMap, throwError } from 'rxjs';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  if (authService.isLoggedIn()) {
    const clonedReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${authService.getToken()}`,
      },
    });
    return next(clonedReq).pipe(
      catchError((err: HttpErrorResponse) => {
        if (err.status === 401) {
          return authService.refreshToken().pipe(
            switchMap(() => {
              const newReq = req.clone({
                setHeaders: {
                  Authorization: `Bearer ${authService.getToken()}`,
                },
              });
              return next(newReq);
            }),
            catchError((err) => {
              authService.logout();
              return throwError(() => err);
            }),
          );
        }
        return throwError(() => err);
      }),
    );
  }
  return next(req);
};
