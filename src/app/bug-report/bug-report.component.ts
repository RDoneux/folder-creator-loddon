import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

export interface Bug {
  title: string;
  description: string;
  type: 'Bug' | 'Feature';
}

@Component({
  selector: 'app-bug-report',
  templateUrl: './bug-report.component.html',
  styleUrls: ['./bug-report.component.scss'],
})
export class BugReportComponent implements OnInit {
  bugs: Bug[];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('http://localhost:8080/getReports').subscribe((data) => {
      this.bugs = <Bug[]>data;

      console.log(data);
    });
  }
}
