import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class JWTService {
  constructor() {}

  decodeToken(token) {
    return jwt_decode(token);
  }

  getDecodeToken(token) {
    return jwt_decode(token);
  }

  getExpiryTime(token) {
    const decodedToken = this.decodeToken(token);
    return decodedToken ? decodedToken['exp'] : null;
  }

  isTokenExpired(token): boolean {
    const expiryTime: number = +this.getExpiryTime(token);
    if (expiryTime) {
      console.log("expired")
      console.log(expiryTime)
      return 1000 * expiryTime - new Date().getTime() < 5000;
    } else {
      return false;
    }
  }
}