import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SignUpRequest } from './signup-request';
import { SignInRequest } from './signin-request';
import { BehaviorSubject, map } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = environment.apiUrl + '/auth';

  private readonly _isAuthenticated = new BehaviorSubject<boolean>(false);

  readonly isAuthenticated$ = this._isAuthenticated.asObservable();

  constructor(private http: HttpClient, private router: Router) {
    if (this.isUserSignedin()) {
      this.setAuthenticated(true);
      router.navigateByUrl("dashboard");
    }
  }

  public signUp(dto: SignUpRequest) {
    return this.http.post<any>(this.apiUrl + '/signup', dto);
  }

  public signIn(dto: SignInRequest) {
    return this.http.post<any>(this.apiUrl + '/signin', dto).pipe(
      map((resp) => {
        sessionStorage.setItem('user', dto.email);
        sessionStorage.setItem('token', 'HTTP_TOKEN ' + resp.token);
        this.setAuthenticated(true);
        return resp;
      })
    );
  }

  public signOut() {
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('token');
    this.setAuthenticated(false);
  }

  isUserSignedin() {
    return sessionStorage.getItem('token') !== null;
  }

  public setAuthenticated(value: boolean) {
    this._isAuthenticated.next(value);
  }

  public getToken() {
    let token = sessionStorage.getItem('token') as string;
    return token;
  }
}
