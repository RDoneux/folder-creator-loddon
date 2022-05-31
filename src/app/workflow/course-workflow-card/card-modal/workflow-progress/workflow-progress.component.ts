import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-workflow-progress',
  templateUrl: './workflow-progress.component.html',
  styleUrls: ['./workflow-progress.component.scss'],
})
export class WorkflowProgressComponent implements OnInit {
  @Input() tag: string;

  progress: string[] = ['todo', 'todo', 'todo', 'todo', 'todo'];

  constructor() {}

  ngOnInit(): void {
    switch (this.tag.toLowerCase()) {
      //@ts-ignore Fallthrough case in switch
      case 'ready for admin': {
        this.progress[4] = 'done';
      }
      //@ts-ignore Fallthrough case in switch
      case 'final sign off': {
        this.progress[3] = 'done';
      }
      //@ts-ignore Fallthrough case in switch
      case 'require 2nd review': {
        this.progress[2] = 'done';
      }
      //@ts-ignore Fallthrough case in switch
      case 'being written': {
        this.progress[1] = 'done';
      }
      case 'courses': {
        this.progress[0] = 'done';
        break;
      }
      default: {
        console.log('unrecognised tag in workflow-progress-component');
      }
    }
  }
}
