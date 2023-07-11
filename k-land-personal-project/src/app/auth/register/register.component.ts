import { Component } from '@angular/core';
import { RegisterService } from '../register.service';
import { RegisterData } from 'src/app/types/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  constructor(
    private registerService: RegisterService,
    private router: Router
  ) {}

  register(data: RegisterData): void {
    if (data.seller !== true) {
      data.seller = false;
    }

    this.registerService.userRegister(data).subscribe((result) => {
      console.log(result);
    });
  }
}
