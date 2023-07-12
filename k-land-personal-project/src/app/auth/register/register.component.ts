import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

import { UserService } from '../user.service';
import { RegisterData } from 'src/app/types/User';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  constructor(
    private userService: UserService,
    private router: Router,
    private cookies: CookieService
  ) {}

  register(data: RegisterData): void {
    if (data.seller !== true) {
      data.seller = false;
    }

    this.userService.userRegister(data);
  }
}
