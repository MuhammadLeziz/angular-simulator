import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, catchError, finalize, tap } from 'rxjs';
import { IUser } from '../models/interfaces/IUser';
import { UserApiServiceService } from './user-api-service.service';
import { LoaderServiceService } from './loader-service.service';
import { MessageServiceService } from './message-service.service';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  private userSubject = new BehaviorSubject<IUser[]>([]);
  readonly users$ = this.userSubject.asObservable();
  private userApi = inject(UserApiServiceService);
  private loader = inject(LoaderServiceService);
  private message = inject(MessageServiceService);

  public setUsers(users: IUser[]) {
    this.userSubject.next(users);
  }

  public getUsers() {
    return this.users$;
  }

  public loadUsers() {
    this.loader.showLoader();

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
