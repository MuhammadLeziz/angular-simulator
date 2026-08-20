import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoaderServiceService {
  private loaderSubject = new BehaviorSubject<boolean>(false);
  loader$: Observable<boolean | undefined> = this.loaderSubject.asObservable();

  showLoader() {
    this.loaderSubject.next(true);
  }

  hideLoader() {
    this.loaderSubject.next(false);
  }
}
