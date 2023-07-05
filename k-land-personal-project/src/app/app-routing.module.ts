import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './auth/register/register.component';
import { HomeComponent } from './feature/home/home.component';
import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'users/register', component: RegisterComponent },
  { path: 'users/login', component: LoginComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
