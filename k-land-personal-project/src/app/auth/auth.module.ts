import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
  declarations: [RegisterComponent, LoginComponent],
  imports: [CommonModule, RouterModule, FormsModule, AuthRoutingModule],
  // exports: [RegisterComponent, LoginComponent],
})
export class AuthModule {}
