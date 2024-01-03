import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError, tap, Subject, BehaviorSubject } from 'rxjs';
import { User } from '../auth/user.module';
import { Route, Router } from '@angular/router';

export interface AuthResponseData {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered: boolean;
}
@Injectable({ providedIn: 'root' })
export class AuthService {
  isLoggedIn = false;
  //userSub = new Subject<User>();
  userSub = new BehaviorSubject<User>(new User('', '', '', new Date()));
  constructor(private http: HttpClient,private router:Router) {}

  signUp(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA8DWhGMJ7HViqGS4BGNnWWGyyJHE4TPJ8',
        { email, password, returnSecurityToken: true }
      )
      .pipe(catchError(this.getErrorHandler), tap(this.handleUser.bind(this)));
  }
  login(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA8DWhGMJ7HViqGS4BGNnWWGyyJHE4TPJ8',
        { email, password, returnSecurityToken: true }
      )
      .pipe(catchError(this.getErrorHandler), tap(this.handleUser.bind(this)));
  }

  private handleUser(response: AuthResponseData) {
    // Get the current timestamp
    const currentTimestamp = new Date().getTime();

    // Add 10 minutes (600,000 milliseconds) to the current timestamp
    const newTimestamp = currentTimestamp + 10 * 60 * 1000;

    // Create a new Date object with the updated timestamp
    const expiryDate = new Date(newTimestamp);
    const user = new User(
      response.email,
      response.localId,
      response.idToken,
      expiryDate
    );
    this.userSub.next(user);
  }
  getErrorHandler(errorRes: HttpErrorResponse) {
    let errorMessage = 'An Error Occured';
    if (errorRes.error.error.message) {
      errorMessage = errorRes.error.error.message;
    }
    return throwError(errorMessage);
  }
  logout() {
    this.userSub.next(new User('', '', '', new Date()));
    this.router.navigate(['/auth'])
    this.isLoggedIn=false;
  }
  isAuthenticated() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.isLoggedIn);
      }, 1000);
    });
  }
}
