import { getSupportedInputTypes } from '@angular/cdk/platform';
import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/user-management/user-management.component';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss'],
})
export class CommentComponent implements OnInit {
  @Input() value: String;

  comment: String;
  user;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    const split: string[] = this.value.split(':::');

    console.log("split", split[0]);

    this.comment = split[0];

    this.userService.getUserByName(split[1]).then((value) => {
      this.user = value;
      console.log(this.user.initials);
    });
  }
}
