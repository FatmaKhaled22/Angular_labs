import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserAuthService } from '../Services/user-auth.service';

export const userAuthGuard: CanActivateFn = (route, state) => {
  const authService = inject(UserAuthService);
  const router = inject(Router);
  if(authService.isUserLogged){
    return true;
  }else{
    alert("At First you must be login");
    router.navigate(['/Login']);
    return false;
  }
};
