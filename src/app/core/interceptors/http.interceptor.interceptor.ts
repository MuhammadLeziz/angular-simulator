import { HttpInterceptorFn, HttpResponse } from '@angular/common/http';
import { catchError, tap } from 'rxjs';

export const httpInterceptorInterceptor: HttpInterceptorFn = (req, next) => {
  const method = req.method;
  const url = req.url;
  const date: any = new Date();
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
    }),
  );
};
