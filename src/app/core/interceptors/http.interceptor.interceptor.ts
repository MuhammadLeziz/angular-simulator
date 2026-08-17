import { HttpInterceptorFn, HttpResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, tap } from 'rxjs';
import { LoaderServiceService } from '../services/loader-service.service';

export const httpInterceptorInterceptor: HttpInterceptorFn = (req, next) => {
  const method = req.method;
  const url = req.url;
  const date: any = new Date();
  const loader = inject(LoaderServiceService);
  loader.showLoader();
  return next(req).pipe(
    tap({
      next: (event) => {
        if (event instanceof HttpResponse) {
          const nowDate = Date.now();
          console.log(method, url, event.status, `${nowDate - date}ms`);
        }
      },
      error: (err) => {
        const nowDate = Date.now();
        console.log(method, url, err.status, `${nowDate - date}ms`);
      },
      finalize: () => {
        loader.hideLoader();
      },
    }),
  );
};
