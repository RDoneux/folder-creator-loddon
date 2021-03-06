import { HttpClient } from '@angular/common/http';
import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Information } from '../additional-information/additional-information.component';
import { AlertComponent } from '../alert/alert.component';
import { UtilsService } from '../utils.service';

@Component({
  selector: 'app-candidate-list',
  templateUrl: './candidate-list.component.html',
  styleUrls: ['./candidate-list.component.scss'],
})
export class CandidateListComponent implements OnInit {
  date: string = new Date().toISOString().slice(0, 10);
  candidateNames: Array<Candidate> = [];

  @ViewChild('alert') alert: AlertComponent;

  courses: Array<string> = new Array();
  selectedCourse: string;

  errorMessage: string = '';

  constructor(private http: HttpClient, public utils: UtilsService) {}

  ngOnInit(): void {
    this.getCurrentSettings();
  }

  getCurrentSettings() {
    this.http.get<any>('http://localhost:8080/settings').subscribe((data) => {
      const coursesTemp = data.courseRequirements;
      coursesTemp.forEach((data) => {
        this.courses.push(data.name);
      });
      this.selectedCourse = data.courseRequirements[0].name;
    });
  }

  addCandidate(candidate: Candidate) {
    if (!candidate.name) {
      this.errorMessage = 'Cannot add empty candidate name';
      return;
    }
    this.candidateNames.push(candidate);
  }

  deleteCandidate(index: number) {
    if (index < 0 || index > this.candidateNames.length) {
      this.errorMessage = 'Cannot find candidate to delete';
      return;
    }
    this.candidateNames.splice(index, 1);
  }

  handleInformationUpdate(info: Information) {
    this.candidateNames[info.candidateIndex].information = info;
  }

  handleDateChange(date: string) {
    console.log('date called: ' + date);
    this.date = date;
  }
  handleCourseTypeChange(courseType: any) {
    this.selectedCourse = courseType.target.value;
    console.log(this.selectedCourse);
  }

  submitCandidates() {
    var course: Course = {
      courseType: this.selectedCourse,
      date: this.date,
      candidates: this.candidateNames,
    };

    console.log(this.selectedCourse);

    if (this.candidateNames.length <= 0) {
      this.errorMessage = 'Please add at least one candidate before submitting';
      return;
    }
    console.log(JSON.stringify(course));
    this.http
      .post<any>('http://localhost:8080/', JSON.stringify(course))
      .subscribe((data) => {
        if (data.response === 'Success') {
          console.log(this.alert);
          // TODO set err response
          this.alert.setAlert('Course Successfully Created');
        }
      });

    this.candidateNames = [];
  }

  resetError(key: String) {
    this.errorMessage = '';
  }
}

export interface Course {
  courseType: string;
  date: string;
  candidates: Candidate[];
}

export interface Candidate {
  name: String;
  information?: Information;
}
