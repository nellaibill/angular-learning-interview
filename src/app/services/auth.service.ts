import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';

interface AuthResponseData {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
}
@Injectable({ providedIn: 'root' })
export class AuthService {
  isLoggedIn = false;
  constructor(private http: HttpClient) {}

  signUp(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA8DWhGMJ7HViqGS4BGNnWWGyyJHE4TPJ8',
        { email, password, returnSecurityToken: true }
      )
      .pipe(
        catchError((errorRes) => {
          let errorMessage = 'An Error Occured';
          if (errorRes.error.error.message) {
            errorMessage = errorRes.error.error.message;
          }
          return throwError(errorMessage);
        })
      );
  }
  login() {
    this.isLoggedIn = true;
  }
  logout() {
    this.isLoggedIn = false;
  }
  isAuthenticated() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.isLoggedIn);
      }, 1000);
    });
  }
}
