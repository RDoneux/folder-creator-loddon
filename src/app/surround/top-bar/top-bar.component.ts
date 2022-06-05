import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user-management/user-management.component';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
})
export class TopBarComponent implements OnInit {
  currentUser: User;

  constructor(public userService: UserService) {
    userService.getCurrentUser().then((value) => {
      this.currentUser = value;
    });
  }

  ngOnInit(): void {
  }
}
