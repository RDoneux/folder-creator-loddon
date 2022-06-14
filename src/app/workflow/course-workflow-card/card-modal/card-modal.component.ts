import { DatePipe } from '@angular/common';
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
import { UserService } from 'src/app/user.service';
import { UtilsService } from 'src/app/utils.service';
import { Files } from '../../workflow.component';

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
  @Input() files;

  commentsArray: string[];
  jsonFiles: Files;

  commentText: string;

  constructor(
    public utils: UtilsService,
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router,
    private UserUtils: UserService,
    public datepipe: DatePipe
  ) {}

  ngOnInit(): void {
    this.commentsArray = this.comments.split(',');
    console.log('comments array: ', this.commentsArray);
    this.courseName = this.utils.capitaliseString(
      this.utils.convertJSONName(this.courseName)
    );
    this.courseDate = this.utils.reverseDate(this.courseDate);
    this.courseDeadline = this.utils.reverseDate(this.courseDeadline);
    this.courseCreated = this.utils.reverseDate(this.courseCreated);
    this.jsonFiles = JSON.parse(this.files);

    console.log(this.jsonFiles);
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
    this.close();
  }

  addComment() {
    const formData = new FormData();

    formData.append('workFlowLocation', this.coursePath);
    formData.append('comment', this.commentText);
    formData.append('user', this.UserUtils.currentUser.name);

    this.http
      .post('http://localhost:8080/addComment', formData)
      .subscribe((data) => {});

      console.log("goes through here");
    this.commentsArray.push(
      this.commentText +
        ':::' +
        this.UserUtils.currentUser.name +
        ':::' +
        this.datepipe.transform(new Date(), 'MM-dd-yyyy|HH:mm')
    );
    
    this.commentText = '';
  }

  handleMoveCourse() {
    this.router.navigate(['/no-feature']);
  }

  close(): void {
    this.cancel.emit('modal-cancel');
    window.location.reload();
  }
}
