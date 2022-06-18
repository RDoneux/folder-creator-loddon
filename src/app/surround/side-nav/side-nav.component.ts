import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  outputFile: string;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

    this.http.get('http://localhost:8080/getOutputFile').subscribe((data) => {
      const received: any = data;
      this.outputFile = received.location;
    })

  }

  handleOutputChange() {
    const formData: FormData = new FormData();
    formData.append("path", this.outputFile);

    this.http.post('http://localhost:8080/editOutputFile', formData).subscribe((data) => {
    })
  }

}
