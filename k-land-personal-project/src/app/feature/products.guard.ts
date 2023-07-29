import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const productsGuard: CanActivateFn = (route, state) => {
  let router = inject(Router);
  let user = localStorage.getItem('user');
  let isSeller: boolean = false;
  if (user !== null) {
    isSeller = JSON.parse(user).seller;
  }
  if (isSeller) {
    return true;
  } else {
    return router.navigate(['login']);
  }
};
