import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
})
export class AlertComponent implements OnInit {
  alertText: String = '';
  showing: boolean = false;

  @ViewChild('alert') alert: ElementRef;

  constructor() {
    // window.addEventListener('mousedown', () => {
    //   this.setAlert('Course Created Sucessfully');
    // });
  }

  ngOnInit(): void {}

  public setAlert(text: String) {
    this.alertText = text;
    this.showing = true;
    setTimeout(() => {
      this.showing = false;
    }, 3000);
  }
}
