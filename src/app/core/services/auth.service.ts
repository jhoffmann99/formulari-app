import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SignUpRequest } from './signup-request';
import { SignInRequest } from './signin-request';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:3000/api/auth';

  constructor(private http: HttpClient) {}

  signUp(dto: SignUpRequest) {
    return this.http.post<any>(this.apiUrl + '/signup', dto);
  }

  signIn(dto: SignInRequest) {
    return this.http.post<any>(this.apiUrl + '/signin', dto, {withCredentials: true});
  }

  signOut() {
    return this.http.post<any>(this.apiUrl + '/signout', {}, {withCredentials: true});
  }

}
