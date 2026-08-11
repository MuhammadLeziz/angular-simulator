import { Component, DestroyRef, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, FormControlName, ReactiveFormsModule } from '@angular/forms';
import { BehaviorSubject, combineLatest, debounceTime, distinctUntilChanged, map } from 'rxjs';

@Component({
  selector: 'app-usersfilter',
  imports: [ReactiveFormsModule],
  templateUrl: './usersfilter.component.html',
  styleUrl: './usersfilter.component.scss',
})
export class UsersfilterComponent implements OnInit {
  @Output() filteredString = new EventEmitter<string>();
  searchControl = new FormControl('', { nonNullable: true });
  private readonly destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    this.searchControl.valueChanges
      .pipe(
        debounceTime(200),
        map((el) => el.trim().toLowerCase()),
        distinctUntilChanged(),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe((val) => this.filteredString.emit(val));
  }
}
