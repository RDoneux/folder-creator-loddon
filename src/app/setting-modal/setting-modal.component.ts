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
  selector: 'app-setting-modal',
  templateUrl: './setting-modal.component.html',
  styleUrls: ['./setting-modal.component.scss'],
})
export class SettingModalComponent implements OnInit {
  constructor(private http: HttpClient) {}

  @Output() cancel: EventEmitter<String> = new EventEmitter();
  @ViewChild('content') content: ElementRef;
  @ViewChild('dropZone') dropZone: ElementRef;

  public documentKey: string = "";

  public fileToUpload: File;

  ngOnInit(): void {}

  ngAfterViewInit() {
    const droppingZone = this.dropZone;
    this.dropZone.nativeElement.addEventListener('dragover', (e) => {
      e.stopPropagation();
      e.preventDefault();
      e.dataTransfer.dropEffect = 'copy';
    });
    this.dropZone.nativeElement.addEventListener('dragenter',  (e) => {
      e.stopPropagation();
      e.preventDefault();
      droppingZone.nativeElement.classList.add('droppable');
    });
    this.dropZone.nativeElement.addEventListener('dragleave',  (e) => {
      e.stopPropagation();
      e.preventDefault();
      droppingZone.nativeElement.classList.remove('droppable');
    });
    this.dropZone.nativeElement.addEventListener('drop',  (e) =>{
      e.stopPropagation();
      e.preventDefault();
      droppingZone.nativeElement.classList.remove('droppable');
      var files: File[] = e.dataTransfer.files;
      this.fileToUpload = files[0];
      this.documentKey = files[0].name.replace(".docx", "");
      console.log(this.fileToUpload.name)
    });
  }

  handleAddFiles() {
    if (this.fileToUpload) {
      const formData = new FormData();
      formData.append('file', this.fileToUpload);
      formData.append('key', this.documentKey);

      this.http
        .post('http://localhost:8080/addSetting', formData)
        .subscribe((data) => {});
    }

    // this.getCurrentSettings();
    window.location.reload();
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

  close() {
    this.cancel.emit('modal-cancel');
    console.log(this.fileToUpload);
  }
}
