import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  isAuthenticated = false;
  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.userSub.subscribe((user) => {
      this.isAuthenticated = user ? true : false;
    });
  }
  onLogout(event : Event): void {
    event.preventDefault();
    this.authService.logout();
    this.isAuthenticated = false;
  }
}
