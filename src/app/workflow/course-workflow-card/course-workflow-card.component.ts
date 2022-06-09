import { Component, Input, OnInit } from '@angular/core';
import { Rgba } from 'ngx-color-picker';
import { CookieService } from 'ngx-cookie-service';
import { User } from 'src/app/user-management/user-management.component';
import { UserService } from 'src/app/user.service';
import { UtilsService } from 'src/app/utils.service';

@Component({
  selector: 'app-course-workflow-card',
  templateUrl: './course-workflow-card.component.html',
  styleUrls: ['./course-workflow-card.component.scss'],
})
export class CourseWorkflowCardComponent implements OnInit {
  @Input() courseName: string;
  @Input() created: string;
  @Input() deadline: string;
  @Input() date: string;
  @Input() description: string;
  @Input() priority: string;
  @Input() path: string;
  @Input() assigned: string;
  @Input() comments: string;
  @Input() tag: string;

  cardModalShow: boolean = false;
  cardColour: string = 'rgb(0,0,0)';
  constructor(private utils: UtilsService, private userService: UserService) {}

  ngOnInit(): void {
    this.courseName = this.utils.capitaliseString(
      this.utils.convertJSONName(this.courseName)
    );
    if (this.assigned) {
      this.userService.getUserByName(this.assigned).then((user: User) => {
        this.cardColour = user.colour;
      });
    }
  }

  displayModal(show: boolean) {
    this.cardModalShow = show;
  }
}
