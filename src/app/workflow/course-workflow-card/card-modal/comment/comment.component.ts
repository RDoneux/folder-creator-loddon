import { getSupportedInputTypes } from '@angular/cdk/platform';
import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { User } from 'src/app/user-management/user-management.component';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss'],
})
export class CommentComponent implements OnInit {
  @Input() value: string;

  edit: boolean = false;

  comment: string;
  user;
  date: string;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    const split: string[] = this.value.split(':::');
    this.comment = split[0];
    this.userService.getUserByName(split[1]).then((value) => {
      this.user = value;
    });
    this.date = split[2];
  }

  editComment() {
    console.log("new comment");
  }

  toggleEdit() {
    this.edit = !this.edit;
  }

}
