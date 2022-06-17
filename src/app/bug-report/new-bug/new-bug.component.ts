import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-bug',
  templateUrl: './new-bug.component.html',
  styleUrls: ['./new-bug.component.scss'],
})
export class NewBugComponent implements OnInit {
  title: string;
  description: string;
  type: string = 'Feature'; 

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  save() {
    if (this.title && this.description && this.type) {
      const formData: FormData = new FormData();
      formData.append('title', this.title);
      formData.append('description', this.description);
      formData.append('type', this.type);
      this.http
        .post('http://localhost:8080/addReport', formData)
        .subscribe((data) => {});
      this.title = '';
      this.description = '';
      window.location.reload();
    } else {
      console.log('Oi, fill this shit in please!');
    }
  }
}
