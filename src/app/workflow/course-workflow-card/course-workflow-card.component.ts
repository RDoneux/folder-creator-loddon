import { Component, Input, OnInit } from '@angular/core';

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

  constructor() {}

  ngOnInit(): void {
  }

  displayModal(show: boolean) {
    this.cardModalShow = show;
  }
}
