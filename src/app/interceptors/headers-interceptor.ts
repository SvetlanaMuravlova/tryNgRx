import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export interface HeadersInterceptor implements HttpInterceptor {

}
