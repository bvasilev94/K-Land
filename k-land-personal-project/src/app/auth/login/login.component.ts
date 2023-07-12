import { Component } from '@angular/core';

import { LoginData } from 'src/app/types/User';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private userService: UserService) {}

  login(data: LoginData): void {
    this.userService.userLogin(data);
  }
}
