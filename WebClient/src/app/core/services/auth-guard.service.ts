import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';


@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(public router: Router) { }
  canActivate(): boolean {
    if (!localStorage.getItem('token')) {
      this.router.navigate(['authenticate']);
      return false;
    }
    return true;
  }
}