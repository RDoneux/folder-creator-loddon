import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-description',
  templateUrl: './course-description.component.html',
  styleUrls: ['./course-description.component.scss'],
})
export class CourseDescriptionComponent implements OnInit {
  @Input() title: String;
  @Input() description: string;
  @Input() coursePath: string;

  public textContent: string;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.textContent = this.description;
  }

  setDescriptionHeight() {
    
  }

  save() {
    console.log("saving ", this.coursePath, ": ", this.textContent)
    const formData: FormData = new FormData();
    formData.append('coursePath', this.coursePath);
    formData.append('textContent', this.textContent);

    this.http
      .post('http://localhost:8080/updateDescription', formData)
      .subscribe((data) => {});
  }
}
