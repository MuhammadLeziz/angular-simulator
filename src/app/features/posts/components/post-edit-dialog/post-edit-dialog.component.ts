import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { DynamicDialogComponent, DynamicDialogModule } from 'primeng/dynamicdialog';
import { DialogService, DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { IPost } from '../../models/interfaces/IPost';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
@Component({
  selector: 'app-post-edit-dialog',
  imports: [ReactiveFormsModule, InputTextModule, ButtonModule],
  templateUrl: './post-edit-dialog.component.html',
  styleUrl: './post-edit-dialog.component.scss',
})
export class PostEditDialogComponent {
  ref = inject(DynamicDialogRef);
  config = inject(DynamicDialogConfig);
  fb = inject(FormBuilder);
  post: IPost = this.config.data.post;

  dialogForm = this.fb.group({
    title: [this.post?.title || ''],
    tags: [this.post?.tags || ''],
    views: [this.post?.views || ''],
  });

  onCancel() {
    this.ref.close();
  }

  onSave() {
    this.ref.close(this.dialogForm.value);
  }
}
