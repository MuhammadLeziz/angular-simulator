import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, catchError, finalize, tap } from 'rxjs';
import { IUser } from '../models/interfaces/IUser';
import { UserApiServiceService } from './user-api-service.service';
import { LoaderServiceService } from './loader-service.service';
import { MessageServiceService } from './message-service.service';
import { of } from 'rxjs';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  private userSubject = new BehaviorSubject<IUser[]>([]);
  readonly users$ = this.userSubject.asObservable();
  private userApi = inject(UserApiServiceService);
  private loader = inject(LoaderServiceService);
  private message = inject(MessageServiceService);
  private localStorageService = inject(LocalStorageService);

  public setUsers(users: IUser[]) {
    this.userSubject.next(users);
    this.localStorageService.setItem('users', users);
  }

  public getUsers() {
    return this.userSubject.getValue();
  }

  public addUser(user: IUser) {
    const currentUsers = this.userSubject.getValue();
    const newUsers = [...currentUsers, user];
    this.setUsers(newUsers);
  }

  public loadUsers() {
    this.loader.showLoader();
    const savedUsers = this.localStorageService.getItem<IUser[]>('users');
    if (savedUsers !== null) {
      this.setUsers(savedUsers);
      this.loader.hideLoader();
      return of(savedUsers);
    }
    return this.userApi.getUsers().pipe(
      tap((users) => {
        this.setUsers(users);
      }),
      catchError(() => {
        this.message.showError('Не удалось загрузить пользователей');
        return of([]);
      }),
      finalize(() => {
        this.loader.hideLoader();
      }),
    );
  }
}
