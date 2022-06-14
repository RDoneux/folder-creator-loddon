import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-workflow',
  templateUrl: './workflow.component.html',
  styleUrls: ['./workflow.component.scss'],
})
export class WorkflowComponent implements OnInit {
  cards: CourseCard[];
  trackNames: string[] = [
    'Courses',
    'Being written',
    'Require 2nd Review',
    'Final Sign off',
    'Ready for admin',
  ];
  tracks: Array<Track> = new Array<Track>(this.trackNames.length);

  cardModalShow: boolean = false;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getCourses();

    for (var i = 0; i < this.tracks.length; i++) {
      this.tracks[i] = { title: this.trackNames[i] };
      this.tracks[i].cards = new Array<CourseCard>();
    }
  }
  drop(event: CdkDragDrop<CourseCard[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      this.updateTag(
        event.container.element.nativeElement.id,
        event.item.data.path
      );
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
    window.location.reload();
  }
  getCourses() {
    this.http.get('http://localhost:8080/getCourses').subscribe((data) => {
      const input: CardContainer = <CardContainer>data;
      this.cards = <CourseCard[]>input.files;

      for (var i = 0; i < this.cards.length; i++) {
        const card: CourseCard = this.cards[i];
        // this.cards.files[i].people = JSON.parse(this.cards.files[i].people);
        // console.log(JSON.parse(this.cards.files[i].people));
        console.log(card.files);
        switch (card.tag.toLowerCase()) {
          case 'courses':
            this.tracks[0].cards.push(card);
            break;
          case 'being written':
            this.tracks[1].cards.push(card);
            break;
          case 'require 2nd review':
            this.tracks[2].cards.push(card);
            break;
          case 'final sign off':
            this.tracks[3].cards.push(card);
            break;
          case 'ready for admin':
            this.tracks[4].cards.push(card);
            break;
          default:
            console.log('no tag found');
        }
      }
    });

    console.log(this.tracks);
  }

  getTaggedPeople(): string[] {
    return ['this', 'and', 'tnat'];
  }

  updateTag(tag: string, path: string) {
    console.log(tag + ' : ' + path);

    const formData = new FormData();

    formData.append('tag', tag);
    formData.append('path', path);

    this.http
      .post('http://localhost:8080/updateTag', formData)
      .subscribe((data) => {});
  }

  displayModal(event, show: boolean) {
    this.cardModalShow = show;
  }
}

export interface Track {
  title: string;
  cards?: Array<CourseCard>;
}

export interface CourseCard {
  tag: string;
  name: string;
  comments: string;
  description: string;
  assigned: string;
  priority: string;
  created: string;
  date: string;
  deadline: string;
  path: string;
  files: Files[];
}

export interface Files {
  general: GeneralFiles[];
  candidate: Candidate[];
}

export interface GeneralFiles {
  inProgress: string;
  name: string;
  checked: string;
  written: string;
}

export interface Candidate {
  inProgress: string;
  name: string;
  checked: string;
  noAttend: string;
  written: string;
  signedOff: string;
  candidateFiles: CandidateFiles[];
}

export interface CandidateFiles {
  inProgress: string;
  name: string;
  checked: string;
  noAttend: string;
  written: string;
  signedOff: string;
}

interface CardContainer {
  files: [];
}
