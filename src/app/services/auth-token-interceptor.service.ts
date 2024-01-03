import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, exhaustMap, switchMap, take } from 'rxjs';
import { AuthService } from './auth.service';
import { User } from '../auth/user.module';

@Injectable()
export class AuthTokenInterceptorService implements HttpInterceptor {
  constructor(private authService: AuthService) {}
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return this.authService.userSub.pipe(
      take(1),
      switchMap((user: User) => {
        if (!user) {
          return next.handle(req);
        }
        let modifiedReq = req.clone({
          params: req.params.append('auth', user.getToken()),
        });
        return next.handle(modifiedReq);
      })
    );
  }
}
