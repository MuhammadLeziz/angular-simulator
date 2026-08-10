import { Component, inject, OnInit } from '@angular/core';
import { UserServiceService } from '../../core/services/user-service.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-users',
  imports: [AsyncPipe],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent implements OnInit {
  private readonly userService = inject(UserServiceService);
  readonly users$ = this.userService.getUsers();

  ngOnInit(): void {
    this.userService.loadUsers().subscribe();
  }
}
