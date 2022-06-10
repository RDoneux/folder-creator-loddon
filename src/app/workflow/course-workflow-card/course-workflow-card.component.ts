import { Component, Input, OnInit } from '@angular/core';
import { Rgba } from 'ngx-color-picker';
import { CookieService } from 'ngx-cookie-service';
import { User } from 'src/app/user-management/user-management.component';
import { UserService } from 'src/app/user.service';
import { UtilsService } from 'src/app/utils.service';
import { Files } from '../workflow.component';

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
  @Input() files: string;

  public jsonFiles: Files;
  public writtenCandidateFiles: number = 0;
  public writtenGeneralFiles: number = 0;

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
    this.jsonFiles = JSON.parse(this.files);

    this.jsonFiles.general.forEach((data) => {
      if (data.written == 'true') {
        this.writtenGeneralFiles++;
      }
    });
    this.jsonFiles.candidate.forEach((data) => {
      if (data.written == 'true') {
        this.writtenCandidateFiles++;
      }
    });
  }

  displayModal(show: boolean) {
    this.cardModalShow = show;
  }
}
