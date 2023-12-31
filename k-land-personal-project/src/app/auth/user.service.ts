import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { GetUser, LoginData, RegisterData } from '../types/User';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient, private router: Router) {}

  isLogged() {
    return !!localStorage.getItem('user');
  }

  getUser() {
    return localStorage.getItem('user');
  }

  getUserId(): string {
    let userId = '';
    let user = localStorage.getItem('user');
    if (user !== null) {
      userId = JSON.parse(user)._id;
    }

    return userId;
  }

  userRegister(data: RegisterData) {
    return this.http.post('http://localhost:3030/users/register', data, {
      observe: 'response',
    });
  }

  userLogin(data: LoginData) {
    return this.http.post('http://localhost:3030/users/login', data, {
      observe: 'response',
    });
  }

  userLogout(): void {
    localStorage.removeItem('user');
  }
}
