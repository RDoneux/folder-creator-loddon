import { HttpClient } from '@angular/common/http';
import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilsService } from 'src/app/utils.service';

@Component({
  selector: 'app-card-modal',
  templateUrl: './card-modal.component.html',
  styleUrls: ['./card-modal.component.scss'],
})
export class CardModalComponent implements OnInit {
  @Output() cancel: EventEmitter<String> = new EventEmitter();
  @ViewChild('content') content: ElementRef;

  @Input() courseName: string;
  @Input() courseDate: string;
  @Input() courseDeadline: string;
  @Input() courseCreated: string;
  @Input() description: string;
  @Input() assigned: string;
  @Input() comments: string;
  @Input() priority: string;
  @Input() tag: string;
  @Input() coursePath: string;

  commentsArray: string[];

  commentText: string;

  constructor(
    private utils: UtilsService,
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.commentsArray = this.comments.split(',');
    this.courseName = this.utils.capitaliseString(
      this.utils.convertJSONName(this.courseName)
    );
    this.courseDate = this.utils.reverseDate(this.courseDate);
    this.courseDeadline = this.utils.reverseDate(this.courseDeadline);
    this.courseCreated = this.utils.reverseDate(this.courseCreated);
  }

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

  addComment() {
    const formData = new FormData();

    formData.append('workFlowLocation', this.coursePath);
    formData.append('comment', this.commentText);

    this.http
      .post('http://localhost:8080/addComment', formData)
      .subscribe((data) => {});

    this.commentsArray.push(this.commentText);
    this.commentText = '';
  }

  handleMoveCourse() {
    this.router.navigate(['/no-feature']);
  }

  close(): void {
    this.cancel.emit('modal-cancel');
  }
}
