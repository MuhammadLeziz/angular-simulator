import { Component, inject, OnInit } from '@angular/core';
import { UserServiceService } from '../../core/services/user-service.service';
import { AsyncPipe } from '@angular/common';
import { UserCardComponent } from '../user-card/user-card.component';
import { BehaviorSubject, combineLatest, filter, map, tap } from 'rxjs';
import { UserCreateComponent } from '../user-create/user-create.component';
import { IUser } from '../../core/models/interfaces/IUser';
import { UsersfilterComponent } from '../usersfilter/usersfilter.component';
import { PluralPipe } from '../../shared/pipes/plural.pipe';
import { PhoneFormatPipe } from '../../shared/pipes/phone-format.pipe';

@Component({
  selector: 'app-users',
  imports: [AsyncPipe, UserCardComponent, UserCreateComponent, UsersfilterComponent, PluralPipe],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent implements OnInit {
  private readonly userService = inject(UserServiceService);
  readonly users$ = this.userService.users$;
  private readonly filteredValue$ = new BehaviorSubject<string>('');
  usersCount!: number;
  readonly filteredUsers$ = combineLatest([this.users$, this.filteredValue$]).pipe(
    map(([users, filterValue]) => {
      if (!filterValue) {
        return users;
      }
      return users.filter((user) => user.name.trim().toLowerCase().includes(filterValue));
    }),
    tap((el) => (this.usersCount = el.length)),
  );

  ngOnInit(): void {
    this.userService.loadUsers().subscribe();
  }

  deleteCard(id: number) {
    const currentArray = this.userService.getUsers();
    const newArray = currentArray.filter((el) => id !== el.id);
    this.userService.setUsers(newArray);
  }

  addUser(user: IUser) {
    this.userService.addUser(user);
  }

  filterCards(str: string) {
    this.filteredValue$.next(str);
  }
}
