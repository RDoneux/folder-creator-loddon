import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-workflow-card',
  templateUrl: './course-workflow-card.component.html',
  styleUrls: ['./course-workflow-card.component.scss'],
})
export class CourseWorkflowCardComponent implements OnInit {
  @Input() courseName: String;
  @Input() created: string;
  @Input() deadline: string;
  @Input() description: string;
  @Input() priority: string;


  constructor() {}

  ngOnInit(): void {

  }


}
