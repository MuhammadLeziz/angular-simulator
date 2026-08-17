import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { PostApiService } from '../../services/post-api.service';
import { Router, RouterLink } from '@angular/router';
import { take, tap } from 'rxjs';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';

@Component({
  selector: 'app-post-create',
  imports: [ReactiveFormsModule, RouterLink, InputTextModule, TextareaModule, ButtonModule],
  templateUrl: './post-create.component.html',
  styleUrl: './post-create.component.scss',
})
export class PostCreateComponent {
  fb = inject(FormBuilder);
  formCreatePost = this.fb.group({
    title: [''],
    body: [''],
    tags: [''],
    userId: [''],
  });
  postApiService = inject(PostApiService);
  router = inject(Router);

  onSubmit() {
    const formValue = this.formCreatePost.value;
    const newPost = {
      title: formValue.title || '',
      body: formValue.body || '',
      tags: formValue.tags?.split(',') || [],
      userId: Number(formValue.userId) || 1,
    };
    this.postApiService
      .addPost(newPost)
      .pipe(
        tap(() => {
          this.router.navigate(['/posts']);
        }),
      )
      .subscribe();
  }
}
