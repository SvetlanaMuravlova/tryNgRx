import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { catchError, onErrorResumeNext } from 'rxjs/operators';
import { ErrorService } from '@services/error.service';

@Injectable()
export class  ErrorsInterceptor implements HttpInterceptor {
  constructor(
    private errorServ: ErrorService
  ){}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).
    pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
          errorMessage = `Error: ${error.error.message}`;
        } else {
          errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        this.errorServ.createError(errorMessage);
        return throwError(errorMessage);
      })
    )  as Observable<HttpEvent<any>>;
  }
}
