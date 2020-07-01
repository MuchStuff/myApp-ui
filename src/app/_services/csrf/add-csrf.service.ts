import { HttpHandler, HttpInterceptor, HttpRequest, HttpXsrfTokenExtractor } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AddCsrfHeaderInterceptorService implements HttpInterceptor {
    constructor(private xsrfTokenExtractor: HttpXsrfTokenExtractor) {}

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        let xsrfToken = this.xsrfTokenExtractor.getToken();
        
        const authorizedRequest = req.clone({
            withCredentials: false,
            headers: req.headers.set("X-XSRF-TOKEN", xsrfToken)
        });
        return next.handle(authorizedRequest);
    }
}
