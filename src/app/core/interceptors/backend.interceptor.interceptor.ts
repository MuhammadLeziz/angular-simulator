import { HttpErrorResponse, HttpInterceptorFn, HttpResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, tap, throwError } from 'rxjs';
import { MessageServiceService } from '../services/message-service.service';

export const backendInterceptorInterceptor: HttpInterceptorFn = (req, next) => {
  const messageService = inject(MessageServiceService);
  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status >= 500 && error.status < 600) {
        messageService.showError(`Произошла ошибка ${error.status} на бекенд сервере`);
      }
      return throwError(() => error);
    }),
  );
};
