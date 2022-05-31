import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-assigned-tag',
  templateUrl: './assigned-tag.component.html',
  styleUrls: ['./assigned-tag.component.scss']
})
export class AssignedTagComponent implements OnInit {

  @Input() name: string;

  constructor() { }

  ngOnInit(): void {
  }

  handleNameChange() {
    console.log("this feature doesn't exist yet. Blocked by the need for users");
  }

}
