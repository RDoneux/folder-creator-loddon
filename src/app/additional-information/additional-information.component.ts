import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  NgModule,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-additional-information',
  templateUrl: './additional-information.component.html',
  styleUrls: ['./additional-information.component.scss'],
})
export class AdditionalInformationComponent implements OnInit {
  showing: boolean = false;

  organisation: string = '';
  score: number = 0;

  interventions: boolean = false;
  presentation: boolean = false;
  portfolio: boolean = false;
  courseOutcome: boolean = false;

  options: string[] = [];

  @Output() information = new EventEmitter<Information>();
  @Input() candidateIndex: string;

  constructor() {}

  ngOnInit(): void {
    this.setAdditionalInformation();
    this.sendAdditionalInformation();
  }

  updateOrganisation(input: string) {
    this.organisation = input;
    this.sendAdditionalInformation();
  }

  updateScore(input: number) {
    this.score = input;
    this.sendAdditionalInformation();
  }

  updateInterventions(input: boolean) {
    this.interventions = input;
    this.sendAdditionalInformation();
  }

  updatePresentation(input: boolean) {
    this.presentation = input;
    this.sendAdditionalInformation();
  }

  updatePortfolio(input: boolean) {
    this.portfolio = input;
    this.sendAdditionalInformation();
  }

  updateCourseOutcome(input: boolean) {
    this.courseOutcome = input;
    this.sendAdditionalInformation();
  }

  sendAdditionalInformation(): void {
    this.information.emit(this.setAdditionalInformation());
  }

  setAdditionalInformation(): Information {
    return {
      organisation: this.organisation,
      score: this.score,
      options: [
        { name: 'interventions', value: this.interventions },
        { name: 'presentation', value: this.presentation },
        { name: 'portfolio', value: this.portfolio },
        { name: 'courseOutcome', value: this.courseOutcome },
      ],
      candidateIndex: +this.candidateIndex
    };

  }

  toggleShow() {
    this.showing = !this.showing;
  }
}

export interface Information {
  organisation: string;
  score: number;
  options: Option[];
  candidateIndex: number;
}

interface Option {
  name: string;
  value: boolean;
}
