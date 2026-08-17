import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IPostResponse } from '../models/interfaces/IPostResponse';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { IPost } from '../models/interfaces/IPost';

@Injectable({
  providedIn: 'root',
})
export class PostApiService {
  private http = inject(HttpClient);

  getPosts(limit: number, skip: number): Observable<IPostResponse> {
    return this.http.get<IPostResponse>(environment.POSTS_API_URL + `?limit=${limit}&skip=${skip}`);
  }

  getPost(id: number): Observable<IPost> {
    return this.http.get<IPost>(environment.POSTS_API_URL + `/${id}`);
  }

  addPost(post: Partial<IPost>): Observable<IPost> {
    return this.http.post<IPost>(environment.POSTS_API_URL + '/add', post);
  }

  updatePost(id: number, post: Partial<IPost>): Observable<IPost> {
    return this.http.put<IPost>(environment.POSTS_API_URL + `/${id}`, post);
  }

  deletePost(id: number) {
    return this.http.delete(environment.POSTS_API_URL + `/${id}`);
  }
}
