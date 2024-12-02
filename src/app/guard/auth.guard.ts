import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  return localStorage.getItem('user') != null ? true : false;
};
