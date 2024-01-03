import { Component } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { AuthResponseData, AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './auth-component.html',
  styleUrls: ['./auth-component.css'],
})
export class AuthComponent {
  isLoginMode = true;
  isLoading = false;
  error = null;
  constructor(private authService: AuthService, private router: Router) {}
  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }
  onFormSubmit(authForm: NgForm) {
    if (!authForm.valid) {
      return;
    }
    this.isLoading = true;
    let authObs: Observable<AuthResponseData>;
    if (this.isLoginMode) {
      authObs = this.authService.login(
        authForm.value.email,
        authForm.value.password
      );
    } else {
      authObs = this.authService.signUp(
        authForm.value.email,
        authForm.value.password
      );
    }
    authObs.subscribe(
      (response) => {
        console.log(response);
        this.isLoading = false;
        this.router.navigate(['/']);
      },
      (errorMessage) => {
        this.isLoading = false;
        this.error = errorMessage;
      }
    );
  }

  getPasswordErrors(password: any) {
    if (password?.errors?.['required']) {
      return 'Password is required';
    }
    if (password?.errors?.['minlength']) {
      return 'Password is required of 6 characters';
    }
    return '';
  }
}
