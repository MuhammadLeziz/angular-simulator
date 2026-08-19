import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IUser } from '../models/interfaces/IUser';

@Injectable({
  providedIn: 'root',
})
export class UserApiServiceService {
  readonly http = inject(HttpClient);
  getUsers() {
    return this.http.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
  }
}
