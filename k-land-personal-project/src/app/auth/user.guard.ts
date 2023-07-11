import { CanActivateFn } from '@angular/router';

export const userGuard: CanActivateFn = (route, state) => {
  if (localStorage.getItem('user')) {
    return true;
  } else {
    return false;
  }
};
