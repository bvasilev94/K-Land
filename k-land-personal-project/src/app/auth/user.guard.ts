import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const userGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  if (localStorage.getItem('user')) {
    return router.navigate(['home']);
  } else {
    return true;
  }
};

export const orderGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  if (localStorage.getItem('user')) {
    return true;
  } else {
    return router.navigate(['home']);
  }
};
