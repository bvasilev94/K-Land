import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { userGuard } from './user.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [userGuard] },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [userGuard], 
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
