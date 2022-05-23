import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {
  documents: any;
  courses: any;

  showAddModal: boolean = false;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getCurrentSettings();
  }

  getCurrentSettings() {
    this.http.get<any>('http://localhost:8080/settings').subscribe((data) => {
      this.documents = data.courseFileLocations;
      this.courses = data.courseRequirements;
    });
  }

  handleFileDelete(event) {
    console.log(event.target.id);
    const formData = new FormData();
    const documentKey: string = event.target.id.replace("-delete", "");

    formData.append('key', documentKey);
    this.http
      .post('http://localhost:8080/deleteSetting', formData)
      .subscribe((data) => {});

    this.getCurrentSettings();
    window.location.reload();
  }

  handleFileChange(event) {
    const file: File = event.target.files[0];
    const documentKey: string = event.target.id;
    if (file) {
      const formData = new FormData();

      formData.append('file', file);
      formData.append('key', documentKey);

      this.http
        .post('http://localhost:8080/editSettings', formData)
        .subscribe((data) => {});
    }

    this.getCurrentSettings();
    window.location.reload();
  }

  displayModal(show: boolean) {
    this.showAddModal = show;
  }

}
