import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { IPost } from '../../models/interfaces/IPost';
import { CardModule } from 'primeng/card';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import {
  faThumbsUp,
  faThumbsDown,
  faEye,
} from '@fortawesome/free-solid-svg-icons';
import { ButtonComponent } from '../../../../shared/ui/button/button.component';

@Component({
  selector: 'app-post-detail',
  imports: [CardModule, RouterLink, FaIconComponent, ButtonComponent],
  templateUrl: './post-detail.component.html',
  styleUrl: './post-detail.component.scss',
})
export class PostDetailComponent {
  routeActive = inject(ActivatedRoute);
  post: IPost = this.routeActive.snapshot.data['post'];
  faThumbsUp = faThumbsUp;
  faThumbsDown = faThumbsDown;
  faEye = faEye;
}
