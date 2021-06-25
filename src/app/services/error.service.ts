import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {
  errorSource: BehaviorSubject<Observable<string>> = new BehaviorSubject(of(''));

  constructor() { }

  createError(message: string): void{
    this.errorSource.next(of(message));
  }
}
