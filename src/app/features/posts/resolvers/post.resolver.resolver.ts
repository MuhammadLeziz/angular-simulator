import { inject } from '@angular/core';
import { ActivatedRoute, ResolveFn } from '@angular/router';
import { PostApiService } from '../services/post-api.service';
import { IPost } from '../models/interfaces/IPost';

export const postResolverResolver: ResolveFn<IPost> = (route, state) => {
  const postApiService = inject(PostApiService);
  const id = route.paramMap.get('id');
  const post = postApiService.getPost(Number(id));

  return post;
};
