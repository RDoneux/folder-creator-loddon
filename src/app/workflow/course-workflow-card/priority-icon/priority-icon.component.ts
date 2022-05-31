import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-priority-icon',
  templateUrl: './priority-icon.component.html',
  styleUrls: ['./priority-icon.component.scss'],
})
export class PriorityIconComponent implements OnInit {
  @Input() priority: string;
  @Input() fullSize: string = 'false';

  constructor() {}

  ngOnInit(): void {
    if(!(this.priority === 'high' || this.priority === 'medium' || this.priority === 'low')) {
      console.error('priority must be set as "high", "medium" or "low". Current priority: ' + this.priority)
    }
  }
}