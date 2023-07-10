import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { RegisterData } from '../types/User';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  constructor(private http: HttpClient) {}

  userRegister(data: RegisterData) {
    return this.http.post('http://localhost:3030/users/register', data);
  }
}
