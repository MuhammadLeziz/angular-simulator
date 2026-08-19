import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { MessageModule } from 'primeng/message';
import { AuthService } from '../../services/auth.service';
import { ILogin } from '../../interfaces/ILogin';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [
    CardModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
    MessageModule,
    ReactiveFormsModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  private fb = inject(FormBuilder);
  authService = inject(AuthService);
  router = inject(Router);
  errorMessage = '';

  loginForm = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });

  ngOnInit(): void {
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['/home']);
    }
  }

  onSubmit() {
    this.authService
      .loginPost(this.loginForm.getRawValue() as ILogin)
      .subscribe({
        next: () => {
          this.router.navigate(['/home']);
          this.errorMessage = '';
        },
        error: () => {
          this.errorMessage = 'Неверный логин или пароль';
          setTimeout(() => {
            this.errorMessage = '';
          }, 3000);
        },
      });
  }
}
