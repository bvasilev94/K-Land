import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { RegisterData } from '../types/User';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  constructor(private http: HttpClient, private router: Router) {}

  userRegister(data: RegisterData) {
    return this.http
      .post('http://localhost:3030/users/register', data, {
        observe: 'response',
      })
      .subscribe((result) => {
        if (typeof result.body == 'object') {
          localStorage.setItem('user', JSON.stringify(result.body));
          this.router.navigate(['home']);
        }
        console.log(result.body);
      });
  }
}
