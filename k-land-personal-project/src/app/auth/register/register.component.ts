import { Component } from '@angular/core';
import { RegisterService } from '../register.service';
import { RegisterData } from 'src/app/types/User';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  constructor(private registerService: RegisterService) {}

  register(data: RegisterData): void {
    console.log(data);
    this.registerService.userRegister(data).subscribe((result) => {
      console.log(result);
    });
  }
}
