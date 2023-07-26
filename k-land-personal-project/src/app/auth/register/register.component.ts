import { Component } from '@angular/core';

import { UserService } from '../user.service';
import { RegisterData } from 'src/app/types/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  errorMessage: undefined | string;

  constructor(private userService: UserService, private router: Router) {}

  register(data: RegisterData): void {
    if (data.seller !== true) {
      data.seller = false;
    }

    this.userService.userRegister(data).subscribe({
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
