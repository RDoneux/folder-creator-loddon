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
  selectedCourse: any;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getCurrentSettings();
  }

  getCurrentSettings() {
    this.http.get<any>('http://localhost:8080/settings').subscribe((data) => {
      this.documents = data.courseFileLocations;
      this.courses = data.courseRequirements;
      this.selectedCourse = this.courses[0];
    });
  }

  handleFileDelete(event) {
    console.log(event.target.id);
    const formData = new FormData();
    const documentKey: string = event.target.id.replace('-delete', '');

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

  handleGeneralRequiredChange(checkbox) {
    const targetCourse = checkbox.target.value.split('|')[0];
    const targetDocument = checkbox.target.value.split('|')[1];
    const newValue = checkbox.target.checked;

    const formData = new FormData();

    formData.append('targetCourse', targetCourse);
    formData.append('targetDocument', targetDocument);
    formData.append('newValue', newValue);

    this.http
      .post('http://localhost:8080/updateRequiredGeneralDocument', formData)
      .subscribe((data) => {});
  }

  handleCandidateRequiredChange(checkbox) {
    const targetCourse = checkbox.target.value.split('|')[0];
    const targetDocument = checkbox.target.value.split('|')[1];
    const newValue = checkbox.target.checked;

    const formData = new FormData();

    formData.append('targetCourse', targetCourse);
    formData.append('targetDocument', targetDocument);
    formData.append('newValue', newValue);

    this.http
      .post('http://localhost:8080/updateRequiredCandidateDocument', formData)
      .subscribe((data) => {});
  }

  handleCourseChange(event) {
    this.courses.forEach((element) => {
      if (element.name === event.target.value) {
        this.selectedCourse = element;
      }
    });
  }

  displayModal(show: boolean) {
    this.showAddModal = show;
  }
}
