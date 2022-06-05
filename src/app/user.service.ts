import { Injectable } from '@angular/core';
import { User } from './user-management/user-management.component';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient } from '@angular/common/http';
import { UntypedFormBuilder } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  users;

  constructor(public http: HttpClient, public cookieService: CookieService) {}

  // async getCurrentUser(): Promise<any> {
  //   var user;
  //   await this.callCurrentUser().then((value) => {
  //     user = value
  //     console.log("value", value);
  //   })
  //   return user;
  // }

  async getCurrentUser(): Promise<any> {
    // console.log(
    //   this.http
    //     .get('http://localhost:8080/user/Rob Doneux')
    //     .subscribe((data) => {resolve(data)})
    // );

    var cachedUser = this.cookieService.get("name");
    console.log( this.cookieService.getAll());
    console.log("casedas ", cachedUser);

    return new Promise((resolve) => {
      this.http
        .get('http://localhost:8080/user/' + cachedUser)
        .subscribe((data) => {
          resolve(data);
        });
    });

    // this.http.get('http://localhost:8080/users').subscribe((data) => {

    // })

    // for (var i = 0; i < this.users.users.length; i++) {
    //   const target = this.users.users[i];
    //   if (target.name == this.cookieService.get('name')) {
    //     return this.users.users[i];
    //   }
    // }
    // return undefined;
  }

  setCurrentUser(user: User) {
    this.cookieService.set('name', user.name);
  }

  printCookies() {
    console.log(this.cookieService.getAll());
  }
}
