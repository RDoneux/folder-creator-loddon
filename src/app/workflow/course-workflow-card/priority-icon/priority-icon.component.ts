import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-priority-icon',
  templateUrl: './priority-icon.component.html',
  styleUrls: ['./priority-icon.component.scss'],
})
export class PriorityIconComponent implements OnInit {
  @Input() priority: string;
  @Input() fullSize: string = 'false';
  @Input() coursePath: string;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    console.log("course path in priorityicon", this.coursePath)
    if(!(this.priority === 'high' || this.priority === 'medium' || this.priority === 'low')) {
      console.error('priority must be set as "high", "medium" or "low". Current priority: ' + this.priority)
    }
  }

  changePriority() {
    if(this.priority == 'low') {
      this.priority = 'medium';
    }else
    if(this.priority == 'medium') {
      this.priority = 'high';
    } else
    if(this.priority == 'high') {
      this.priority = 'low';
    }
    const formData: FormData = new FormData();
    formData.append('priority', this.priority);
    formData.append('coursePath', this.coursePath);

    console.log(this.priority, " : " , this.coursePath);

    this.http.post('http://localhost:8080/updatePriority', formData).subscribe((data)=> {})
  }
}
