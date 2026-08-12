import { AfterViewInit, Component, EventEmitter, inject, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserApiServiceService } from '../../core/services/user-api-service.service';
import { UserServiceService } from '../../core/services/user-service.service';
import { IUser } from '../../core/models/interfaces/IUser';

@Component({
  selector: 'app-user-create',
  imports: [ReactiveFormsModule],
  templateUrl: './user-create.component.html',
  styleUrl: './user-create.component.scss',
})
export class UserCreateComponent {
  @Output() userCreated = new EventEmitter<IUser>();
  fb = inject(FormBuilder).nonNullable;
  userForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
    username: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
    email: ['', [Validators.required, Validators.email, Validators.maxLength(100)]],
    phone: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(25)]],
    website: ['', [Validators.maxLength(100)]],
    address: this.fb.group({
      city: ['', [Validators.required, Validators.maxLength(50)]],
      street: ['', [Validators.required, Validators.maxLength(100)]],
      suite: ['', [Validators.maxLength(50)]],
      zipcode: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],

      geo: this.fb.group({
        lat: ['', [Validators.required]],
        lng: ['', [Validators.required]],
      }),
    }),

    company: this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(50)]],
      catchPhrase: ['', [Validators.maxLength(200)]],
      bs: ['', [Validators.maxLength(100)]],
    }),
  });

  onFormBtn() {
    if (this.userForm.invalid) {
      alert('Не обходи систему!');
      return;
    }
    const formValue = this.userForm.getRawValue();
    const user: IUser = {
      id: Date.now(),
      name: formValue.name,
      username: formValue.username,
      email: formValue.email,
      address: {
        street: formValue.address?.street,
        suite: formValue.address?.suite,
        city: formValue.address?.city,
        zipcode: formValue.address?.zipcode,
        geo: {
          lat: formValue.address?.geo?.lat,
          lng: formValue.address?.geo?.lng,
        },
      },
      phone: formValue.phone,
      website: formValue.website,
      company: {
        name: formValue.company?.name,
        catchPhrase: formValue.company?.catchPhrase,
        bs: formValue.company?.bs,
      },
    };
    this.userCreated.emit(user);
    this.userForm.reset();
  }
}
