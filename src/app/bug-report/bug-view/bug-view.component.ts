import { Component, Input, OnInit } from '@angular/core';
import { Bug } from '../bug-report.component';

@Component({
  selector: 'app-bug-view',
  templateUrl: './bug-view.component.html',
  styleUrls: ['./bug-view.component.scss']
})
export class BugViewComponent implements OnInit {

  @Input() bugs: Bug[];

  constructor() { }

  ngOnInit(): void {
  }

}
