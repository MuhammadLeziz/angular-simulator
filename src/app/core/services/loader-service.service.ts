import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoaderServiceService {
  private loaderSubject = new BehaviorSubject<boolean>(false);
  public loader$: Observable<boolean | undefined> = this.loaderSubject.asObservable();

  public showLoader() {
    this.loaderSubject.next(true);
  }

  public hideLoader() {
    this.loaderSubject.next(false);
  }
}
