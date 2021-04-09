import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CountApisService } from '@services/count-apis.service'
@Injectable()
export class  HeadersInterceptor implements HttpInterceptor {
    private key = environment.API_KEY;

    constructor(
        private countApis: CountApisService
    ) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        req.clone({
            setParams: {
                apikey: this.key
            }
        });
        this.countApis.updateAmount();
        return next.handle(req);
    }

}
