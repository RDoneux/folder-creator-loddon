import { HttpClient } from '@angular/common/http';
import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UtilsService } from 'src/app/utils.service';
import {
  Candidate,
  CandidateFiles,
  Files,
  GeneralFiles,
} from 'src/app/workflow/workflow.component';

@Component({
  selector: 'app-course-document-display',
  templateUrl: './course-document-display.component.html',
  styleUrls: ['./course-document-display.component.scss'],
})
export class CourseDocumentDisplayComponent implements OnInit {
  @Input() files;
  @Input() coursePath: string;

  jsonFiles: Files;

  @ViewChild('rerender') rerender: ElementRef;

  constructor(public utils: UtilsService, public http: HttpClient) {}

  ngOnInit(): void {
    this.jsonFiles = JSON.parse(this.files);
  }

  // private addFlagIfNotAlreadyAdded(
  //   candidate: string,
  //   candidates: String[]
  // ): String[] {
  //   console.log(candidates);
  //   // candidates.forEach((data) => {
  //   //   if (data === candidate) {
  //   //     return candidates;
  //   //   }
  //   // });

  //   for (var i = 0; i < candidates.length; i++) {
  //     if (candidates[i] === candidate) {
  //       return candidates;
  //     }
  //   }
  //   candidates.push(candidate);
  //   return candidates;
  // }

  private updateFilesWritten() {
    // const general: GeneralFiles[] = this.jsonFiles.general;

    // general.forEach((data) => {
    //   var inProgress = 'false';
    //   var written = 'true';
    //   var checked = 'true';

    //   const inProgressAtStart = data.inProgress;
    //   const writtenAtStart = data.written;
    //   const checkedAtStart = data.checked;

    //   if (inProgressAtStart === 'true') {
    //     inProgress = 'true';
    //   }
    //   if (inProgressAtStart === 'false') {
    //     written = 'false';
    //   }
    //   if (inProgressAtStart === 'false') {
    //     checked = 'false';
    //   }
    //   data.inProgress = inProgress;
    //   data.written = written;
    //   data.checked = checked;

    //   if (
    //     data.inProgress !== inProgressAtStart ||
    //     data.written !== writtenAtStart ||
    //     data.checked !== checkedAtStart
    //   ) {
    //     const formData = new FormData();
    //     formData.append('path', this.coursePath);
    //     formData.append('inProgress', flaggedCandidate.inProgress);
    //     formData.append('written', flaggedCandidate.written);
    //     formData.append('checked', flaggedCandidate.checked);

    //     this.http
    //       .post('http://localhost:8080/updateDocumentWorkFlowGeneral', formData)
    //       .subscribe((data) => {});
    //   }
    // });

    const candidate: Candidate[] = this.jsonFiles.candidate;

    var flaggedCandidate: Candidate = undefined;

    candidate.forEach((candidate: Candidate) => {
      var inProgress = 'false';
      var written = 'true';
      var checked = 'true';

      const inProgressAtStart = candidate.inProgress;
      const writtenAtStart = candidate.written;
      const checkedAtStart = candidate.checked;

      candidate.candidateFiles.forEach((file: CandidateFiles) => {
        if (file.inProgress === 'true') {
          inProgress = 'true';
        }
        if (file.written === 'false') {
          written = 'false';
        }
        if (file.checked === 'false') {
          checked = 'false';
        }
      });
      candidate.inProgress = inProgress;
      candidate.written = written;
      candidate.checked = checked;

      if (
        candidate.inProgress !== inProgressAtStart ||
        candidate.written !== writtenAtStart ||
        candidate.checked !== checkedAtStart
      ) {
        flaggedCandidate = candidate;
      }
    });

    if (!flaggedCandidate) return;

    console.log("flagged candidate", flaggedCandidate);
    console.log(flaggedCandidate.inProgress);
    console.log(flaggedCandidate.written);
    console.log(flaggedCandidate.checked);

    const formData = new FormData();
    formData.append('path', this.coursePath);
    formData.append('candidate', flaggedCandidate.name);
    formData.append('inProgress', flaggedCandidate.inProgress);
    formData.append('written', flaggedCandidate.written);
    formData.append('checked', flaggedCandidate.checked);

    this.http
      .post('http://localhost:8080/updateDocumentWorkFlowCandidate', formData)
      .subscribe((data) => {});
    // need to do an HTTP request - perhaps for all the data.

    return;
  }

  updateCheckbox(
    location: string,
    name: string,
    types: string,
    event,
    candidateIndex?: number
  ) {
    if (location === 'general') {
      const general: GeneralFiles[] = this.jsonFiles.general;
      this.checkAppropriateBoxes(name, types, general, event);
    } else if (location === 'candidate') {
      const candidate: CandidateFiles[] =
        this.jsonFiles.candidate[candidateIndex].candidateFiles;
      this.checkAppropriateBoxes(name, types, candidate, event);
    }

    const formData = new FormData();
    formData.append('path', this.coursePath);
    formData.append('type', location);
    formData.append(
      'candidate',
      location === 'candidate'
        ? this.jsonFiles.candidate[candidateIndex].name
        : null
    );

    this.updateFilesWritten();

    formData.append('fileName', name);
    formData.append('progressType', types);
    formData.append('checked', event.target.checked.toString());
    this.http
      .post('http://localhost:8080/updateDocumentWorkflow', formData)
      .subscribe((data) => {});
  }

  private checkAppropriateBoxes(
    name: string,
    types: string,
    files: GeneralFiles[] | CandidateFiles[],
    event
  ): void {
    const checked = event.target.checked.toString();
    files.forEach((file) => {
      if (file.name === name) {
        console.log(types);
        switch (types) {
          //@ts-ignore
          case 'checked':
            file.checked = checked;
            if (checked === 'false') {
              break;
            }
          //@ts-ignore
          case 'written':
            file.written = checked;
            if (checked === 'false') {
              break;
            }
          //@ts-ignore
          case 'inProgress':
            file.inProgress = checked;
            if (checked === 'false') {
              break;
            }
          default:
            break;
        }
        return;
      }
    });
  }
}
