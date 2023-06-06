import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpHeaders,
  HttpErrorResponse,
  HttpResponse,
} from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class UniversalAppInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (this.authService.isUserSignedin() && this.authService.getToken()) {
      const request = req.clone({
        headers: new HttpHeaders({
          Authorization: this.authService.getToken(),
        }),
      });
      return next.handle(request).pipe(
        catchError((err) => {
          if (err instanceof HttpErrorResponse && err.status === 401) {
            this.authService.signOut();
          }
          return throwError(err);
        })
      );
    }

    return next.handle(req);
  }
}
