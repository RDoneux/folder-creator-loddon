import { HttpClient } from '@angular/common/http';
import { isIdentifier } from '@angular/compiler';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-user-icon',
  templateUrl: './user-icon.component.html',
  styleUrls: ['./user-icon.component.scss'],
})
export class UserIconComponent implements OnInit {
  @Input() name: string;
  @Input() colour: string;
  @Input() initials: string;
  hexColour: string;

  // @ViewChild('container') container: ElementRef;
  @ViewChild('deleteElement') deleteElement: ElementRef;
  @ViewChild('colourElement') colourElement: ElementRef;

  showColourPickerModal: boolean;

  constructor(private http: HttpClient, private userService: UserService) {}

  ngOnInit(): void {
    this.hexColour = this.rgbToHex(this.stringRgb(this.colour));
  }

  ngAfterViewInit() {}

  deleteUser(event) {
    var formData: FormData = new FormData();
    formData.append('name', event.path[2].innerText);
    this.http
      .post('http://localhost:8080/deleteUser', formData)
      .subscribe((data) => {});
    window.location.reload();
  }

  updateColour(event) {
    var formData: FormData = new FormData();
    formData.append('name', event.path[3].innerText);
    formData.append('colour', this.hexToRgb(this.hexColour));
    this.http
      .post('http://localhost:8080/updateColour', formData)
      .subscribe((data) => {});
  }

  setUser(event) {
    if (!this.isRightLocationToSetUser(event)) {
      return;
    }
    this.userService.setCurrentUser({
      name: this.name,
      colour: this.colour,
      initials: this.initials,
    });
    window.location.reload();
  }

  isRightLocationToSetUser(event): Boolean {
    const deleteBounds =
      this.deleteElement.nativeElement.getBoundingClientRect();
    const colourBounds =
      this.colourElement.nativeElement.getBoundingClientRect();
    const x = event.clientX;
    const y = event.clientY;

    if (
      x >= deleteBounds.left &&
      x <= deleteBounds.right &&
      y >= deleteBounds.top &&
      y <= deleteBounds.bottom
    ) {
      return false;
    }
    if (
      x >= colourBounds.left &&
      x <= colourBounds.right &&
      y >= colourBounds.top &&
      y <= colourBounds.bottom
    ) {
      return false;
    }
    return true;
  }

  stringRgb(rgb: string): string[] {
    var value = rgb.replace('rgb(', '');
    value = value.replace(')', '');
    return value.split(',');
  }

  rgbToHex(rgb: string[]): string {
    var r = +rgb[0];
    var g = +rgb[1];
    var b = +rgb[2];
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  }

  hexToRgb(hex: string) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? 'rgb(' +
          parseInt(result[1], 16) +
          ', ' +
          parseInt(result[2], 16) +
          ', ' +
          parseInt(result[3], 16) +
          ')'
      : null;
  }
}
