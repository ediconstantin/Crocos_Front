import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { SessionStorage } from 'angular-web-storage';

@Injectable({
  providedIn: 'root'
})

export class AuthInterceptorService {
  @SessionStorage('token') token;

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = req.clone({
      setHeaders: {
        // tslint:disable-next-line:max-line-length
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc1Byb2YiOmZhbHNlLCJpc0FkbWluIjpmYWxzZSwiaWQiOjE0LCJmaXJzdG5hbWUiOiJBTEVYQU5EUlUgU1RFRkFOIiwibGFzdG5hbWUiOiJCSVNBRyIsImlhdCI6MTU0MzI2NjEzOX0.3MJieujCzB-7WCfOwejK7opP_cK3rQx9S-aZNXOcZvY'
      }
    });

    return next.handle(req);
  }

  constructor() { }
}
