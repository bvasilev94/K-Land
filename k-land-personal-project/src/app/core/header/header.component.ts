import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from 'src/app/auth/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isSeller = localStorage.getItem('user');

  ngOnInit() {}

  constructor(private userService: UserService, private router: Router) {}

  logout(): void {
    this.userService.userLogout();
    this.router.navigate(['/']);
  }
}
