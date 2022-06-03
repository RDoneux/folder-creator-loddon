import { Injectable } from '@angular/core';
import { User } from './user-management/user-management.component';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  public user: User;

  constructor(private cookieService: CookieService) {}

  getCurrentUser() {
    const userName: string = this.cookieService.get('name');
  }

  setCurrentUser(user: User) {
    this.cookieService.set('name', user.name);
  }
}
