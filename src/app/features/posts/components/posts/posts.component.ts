import { Component, inject, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { PostApiService } from '../../services/post-api.service';
import { IPost } from '../../models/interfaces/IPost';
import { tap } from 'rxjs';
import { SkeletonModule } from 'primeng/skeleton';
import { Router, RouterLink } from '@angular/router';
import { ContextMenuModule } from 'primeng/contextmenu';
import { MenuItem } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { PostEditDialogComponent } from '../post-edit-dialog/post-edit-dialog.component';
import { TableLazyLoadEvent } from 'primeng/table';
import { ButtonComponent } from '../../../../shared/ui/button/button.component';

@Component({
  selector: 'app-posts',
  imports: [
    TableModule,
    SkeletonModule,
    ContextMenuModule,
    ButtonComponent,
    RouterLink,
  ],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss',
})
export class PostsComponent implements OnInit {
  private readonly dialogService = inject(DialogService);
  readonly postApiService = inject(PostApiService);
  private readonly router = inject(Router);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  postsArray: IPost[] | any[] = [];
  isLoading = true;
  selectedPost: IPost | null = null;
  menuItem: MenuItem[] = [];
  total = 0;
  rows = 10;

  ngOnInit(): void {
    this.menuItem = [
      {
        label: 'View',
        command: () => this.onDoubleClick(this.selectedPost!.id),
      },
      {
        label: 'Edit',
        command: () => this.openEditDialog(this.selectedPost!),
      },
      {
        label: 'Delete',
        command: () => this.deletePost(this.selectedPost!.id),
      },
    ];
  }

  onDoubleClick(postId: number) {
    this.router.navigate(['/posts', postId]);
  }

  deletePost(id: number) {
    this.postApiService
      .deletePost(id)
      .pipe(
        tap(() => {
          this.postsArray = this.postsArray.filter((post) => post.id !== id);
        }),
      )
      .subscribe();
  }

  openEditDialog(post: IPost) {
    const ref = this.dialogService.open(PostEditDialogComponent, {
      header: 'Редактировать пост',
      width: '500px',
      modal: true,
      data: { post },
    });
    ref.onClose.subscribe((updatedFormValue) => {
      if (updatedFormValue) {
        this.postApiService
          .updatePost(post.id, updatedFormValue)
          .pipe(
            tap((savedPost) => {
              this.postsArray = this.postsArray.map((p) =>
                p.id === post.id ? { ...p, ...savedPost } : p,
              );
            }),
          )
          .subscribe();
      }
    });
  }

  loadPosts(event: TableLazyLoadEvent) {
    this.isLoading = true;
    const limit = event.rows ?? 10;
    const skip = event.first ?? 0;
    this.postApiService
      .getPosts(limit, skip)
      .pipe(
        tap((res) => (this.postsArray = res.posts)),
        tap((res) => ((this.total = res.total), (this.isLoading = false))),
      )
      .subscribe();
  }
}
