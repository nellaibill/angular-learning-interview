import { Component } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './auth-component.html',
  styleUrls: ['./auth-component.css'],
})
export class AuthComponent {
  isLoginMode = true;
  isLoading = false;
  error = null;
  constructor(private authService: AuthService) {}
  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }
  onFormSubmit(authForm: NgForm) {
    if (!authForm.valid) {
      return;
    }
    this.isLoading = true;
    if (this.isLoginMode) {
    } else {
      this.authService
        .signUp(authForm.value.email, authForm.value.password)
        .subscribe(
          (response) => {
            console.log(response);
            this.isLoading = false;
          },
          (errorMessage) => {
            this.isLoading = false;
            this.error = errorMessage;
          }
        );
    }
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
