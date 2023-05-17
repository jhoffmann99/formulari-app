import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SignUpRequest } from './signup-request';
import { SignInRequest } from './signin-request';
import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:3000/api/auth';

  private readonly _isAuthenticated = new BehaviorSubject<boolean>(false);

  readonly isAuthenticated$ = this._isAuthenticated.asObservable();

  constructor(private http: HttpClient, private cookieService: CookieService) {}

  public signUp(dto: SignUpRequest) {
    return this.http.post<any>(this.apiUrl + '/signup', dto);
  }

  public signIn(dto: SignInRequest) {
    return this.http.post<any>(this.apiUrl + '/signin', dto, {withCredentials: true});
  }

  public signOut() {
    return this.http.post<any>(this.apiUrl + '/signout', {}, {withCredentials: true});
  }

  get isAuthenticated(): boolean {
    return this._isAuthenticated.getValue();
  }

  private set isAuthenticated(value: boolean) {
    this._isAuthenticated.next(value);
  }

  public setAuthenticated(value: boolean) {
    this._isAuthenticated.next(value);
  }

  public getToken() {
    return this.cookieService.get('formulari');
  }

}
