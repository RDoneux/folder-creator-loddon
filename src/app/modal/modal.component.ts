import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  @Output() cancel: EventEmitter<String> = new EventEmitter();
  @ViewChild('content') content: ElementRef;

  @Input() width: string;
  @Input() height: string;

  constructor() {}

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

  close() {
    this.cancel.emit('modal-cancel');
  }

  getStyles() {
    return { height: this.height, width: this.width };
  }
}
