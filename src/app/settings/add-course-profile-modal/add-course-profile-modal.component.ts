import { HttpClient } from '@angular/common/http';
import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-add-course-profile-modal',
  templateUrl: './add-course-profile-modal.component.html',
  styleUrls: ['./add-course-profile-modal.component.scss'],
})
export class AddCourseProfileModalComponent implements OnInit {
  @Output() cancel: EventEmitter<String> = new EventEmitter();
  @ViewChild('content') content: ElementRef;
  @ViewChild('textInput') textInput: ElementRef;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  handleCancel(event: MouseEvent) {
    const bounds = this.content.nativeElement.getBoundingClientRect();
    if (
      event.clientX >= bounds.left &&
      event.clientX <= bounds.right &&
      event.clientY >= bounds.top &&
      event.clientY <= bounds.bottom
    ) {
      return;
    }
    this.cancel.emit('modal-cancel');
  }

  handleHardCancel() {
    this.cancel.emit('modal-cancel');
  }

  handleSubmit() {
    this.cancel.emit('modal-cancel');

    console.log(this.textInput.nativeElement.value);

    const formData = new FormData();
    formData.append('courseName', this.textInput.nativeElement.value);

    this.http
      .post('http://localhost:8080/addNewCourseProfile', formData)
      .subscribe((data) => {});
    window.location.reload();
  }
}
