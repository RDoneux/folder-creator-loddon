import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-workflow',
  templateUrl: './workflow.component.html',
  styleUrls: ['./workflow.component.scss'],
})
export class WorkflowComponent implements OnInit {
  cards;
  trackNames: string[] = [
    'Courses',
    'Being written',
    'Require 2nd Review',
    'Final Sign off',
    'Ready for admin',
  ];
  tracks: Array<Track> = new Array<Track>(this.trackNames.length);

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getCourses();

    for (var i = 0; i < this.tracks.length; i++) {
      this.tracks[i] = { title: this.trackNames[i] };
      this.tracks[i].cards = new Array<CourseCard>();
    }
  }

  getCourses() {
    this.http.get('http://localhost:8080/getCourses').subscribe((data) => {
      this.cards = data;
      for (var i = 0; i < this.cards.files.length; i++) {
        const card: CourseCard = this.cards.files[i];

        switch (card.tag) {
          case 'courses':
            this.tracks[0].cards.push(card);
            break;
          case 'being written':
            this.tracks[1].cards.push(card);
            break;
          case 'require review':
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
  }
}

export interface Track {
  title: string;
  cards?: Array<CourseCard>;
}

export interface CourseCard {
  tag: string;
  name: string;
  comments: string[];
  description: string;
  people: string[];
  priority: string;
  created: string;
  deadline: string;
}
