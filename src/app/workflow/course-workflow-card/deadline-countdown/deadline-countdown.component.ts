import { SafeKeyedRead } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-deadline-countdown',
  templateUrl: './deadline-countdown.component.html',
  styleUrls: ['./deadline-countdown.component.scss'],
})
export class DeadlineCountdownComponent implements OnInit {
  @Input() start: string;
  @Input() end: string;

  timeToDeadline: number;
  suffix: string = 'days to deadline';
  classAllocation: string = 'safe';

  constructor() {}

  ngOnInit(): void {
    this.timeToDeadline = +this.dayDifference(
      new Date(this.end),
      new Date(new Date())
    );
    if (this.timeToDeadline <= 2) {
      this.classAllocation='warning';
    }
    if (this.timeToDeadline == 1) {
      this.suffix = 'day to deadline';
    } else if (this.timeToDeadline < 0) {
      this.classAllocation='danger';
      this.suffix = 'days past deadline';
    }
  }

  dayDifference(date1: Date, date2: Date) {
    var diff = date1.getTime() - date2.getTime();
    var diffDays = Math.ceil(diff / (1000 * 3600 * 24));
    return diffDays.toString();
  }
}
