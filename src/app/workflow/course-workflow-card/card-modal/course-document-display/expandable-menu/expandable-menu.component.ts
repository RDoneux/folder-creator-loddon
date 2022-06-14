import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-expandable-menu',
  templateUrl: './expandable-menu.component.html',
  styleUrls: ['./expandable-menu.component.scss'],
})
export class ExpandableMenuComponent implements OnInit {
  @Input() title: string;

  @Input() subInfo: string;

  public expanded: string = 'hidden';

  constructor() {}

  toggleExpanded() {
    if (this.expanded == 'hidden') {
      this.expanded = 'show';
    } else {
      this.expanded = 'hidden';
    }
  }

  ngOnInit(): void {}
}
