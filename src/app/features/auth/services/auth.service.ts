/* eslint-disable @typescript-eslint/no-explicit-any */
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { ILogin } from '../interfaces/ILogin';
import { BehaviorSubject, Observable, of, tap } from 'rxjs';
import { IAuth } from '../interfaces/iauth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly http = inject(HttpClient);
  private readonly router = inject(Router);
  private $userSubject = new BehaviorSubject<IAuth | null>(null);
  user$ = this.$userSubject.asObservable();

  loginPost(formVal: ILogin): Observable<IAuth> {
    return this.http.post<IAuth>(environment.LOGIN_USER_API_URL, formVal).pipe(
      tap((res) => localStorage.setItem('accessToken', res.accessToken)),
      tap((res) => localStorage.setItem('refreshToken', res.refreshToken)),
      tap((res: IAuth) => this.$userSubject.next(res)),
    );
  }

  getToken() {
    return localStorage.getItem('accessToken');
  }

  logout() {
    this.$userSubject.next(null);
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    this.router.navigate(['/login']);
  }

  isLoggedIn() {
    if (this.$userSubject.value !== null || this.getToken()) {
      return true;
    } else {
      return false;
    }
  }

  refreshToken(): Observable<any> {
    const refreshToken = localStorage.getItem('refreshToken');
    return this.http
      .post<any>(environment.REFRESH_AUTH_API_URL, {
        refreshToken,
        expiresInMins: 30,
      })
      .pipe(
        tap((res) => {
          localStorage.setItem('accessToken', res.accessToken);
          localStorage.setItem('refreshToken', res.refreshToken);
        }),
      );
  }

  getMe() {
    if (!this.getToken()) {
      return of(null);
    }
    return this.http
      .get<IAuth>(environment.GET_AUTH_USER_API_URL)
      .pipe(tap((res) => this.$userSubject.next(res)));
  }

  checkRole() {
    return this.$userSubject.value?.role === 'admin';
  }
}
