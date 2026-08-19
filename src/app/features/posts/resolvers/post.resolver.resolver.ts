import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { PostApiService } from '../services/post-api.service';
import { IPost } from '../models/interfaces/IPost';

export const postResolverResolver: ResolveFn<IPost> = (route) => {
  const postApiService = inject(PostApiService);
  const id = route.paramMap.get('id');
  const post = postApiService.getPost(Number(id));

  return post;
};
