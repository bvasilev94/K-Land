import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from 'src/app/auth/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(private userService: UserService, private router: Router) {}

  get isLoggedIn(): boolean {
    return this.userService.isLogged();
  }

  get isSeller() {
    let data = this.userService.getUser();
    let user = data && JSON.parse(data);
    return user.seller;
  }

  logout(): void {
    this.userService.userLogout();
    this.router.navigate(['/']);
  }
}
