import { Component } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private authService: AuthServiceService) {}
  login_Validate(): void {
    alert('Login Successfull');
    this.authService.setToken('123');
  }
  logOut():void{
    this.authService.setToken('');
  }
}
