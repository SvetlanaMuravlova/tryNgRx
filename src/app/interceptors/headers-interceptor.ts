import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class  HeadersInterceptor implements HttpInterceptor {
    private key = environment.API_KEY;

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        req.clone({
            setParams: {
                apikey: this.key
            }
        });
        return next.handle(req);
    }

}
