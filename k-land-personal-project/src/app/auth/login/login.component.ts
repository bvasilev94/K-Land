import { Component } from '@angular/core';

import { LoginData } from 'src/app/types/User';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  errorMessage: undefined | string;

  constructor(private userService: UserService, private router: Router) {}

  login(data: LoginData): void {
    this.userService.userLogin(data).subscribe({
      next: (result) => {
        if (typeof result.body == 'object') {
          localStorage.setItem('user', JSON.stringify(result.body));
          this.router.navigate(['home']);
        }
      },
      error: (error) => {
        this.errorMessage = error.error.message;
      },
    });
  }
}
