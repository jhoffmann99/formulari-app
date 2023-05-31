import { CookieService } from 'ngx-cookie-service';
import { Injectable, Injector } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { catchError, map, Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
//import { LoadingService } from '../services/loading.service';
import { JWTService } from '../services/jwt.service';

@Injectable()
export class UniversalAppInterceptor implements HttpInterceptor {
  private authService: AuthService;
  constructor(
    private readonly injector: Injector,
    private readonly jwtService: JWTService,
      private readonly router: Router,
    private readonly cookieService: CookieService
    //private readonly loadingService: LoadingService
  ) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
   // this.loadingService.setLoading(true, req.url);
    this.authService = this.injector.get(AuthService);
    const token: string = this.authService.getToken();

    if (token) {
      // wenn der token abgelaufen ist wird dieser automatisch entfernt
      if (this.jwtService.isTokenExpired(token)) {
          this.cookieService.delete('formulari');
        this.router.navigateByUrl('/home');
      } else {
        this.authService.setAuthenticated(true);
      }
    }

    return next.handle(req).pipe(
      catchError((err) => {
        //this.loadingService.setLoading(false, req.url);
        return err;
      }),
      map<HttpEvent<any>, any>((evt: HttpEvent<any>) => {
        if (evt instanceof HttpResponse) {
          //this.loadingService.setLoading(false, req.url);
        }
        return evt;
      })
    );
  }
}