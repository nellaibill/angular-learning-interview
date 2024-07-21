import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  private tokenSubject = new BehaviorSubject<string | null>(null);
  public token$ = this.tokenSubject.asObservable();

  setToken(token: string) {
    this.tokenSubject.next(token);
  }
  getToken(): string | null {
    return this.tokenSubject.value;
  }
}
