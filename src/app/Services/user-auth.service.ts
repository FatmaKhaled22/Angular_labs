import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserAuthService {
  // access token
  userLogged: BehaviorSubject<boolean>;
  constructor() {
    this.userLogged = new BehaviorSubject<boolean>(this.isUserLogged);
  }
  get isUserLogged(): boolean {
    return localStorage.getItem('token') ? true : false;
  }
  userLogin(userEmail: string, password: string) {
    let userToken = '987654';
    localStorage.setItem('token', userToken);

    this.userLogged.next(true);
  }
  userLogout() {
    localStorage.removeItem('token');
    this.userLogged.next(false);
  }
  getUserStatus(): Observable<boolean> {
    return this.userLogged.asObservable();
  }
}
