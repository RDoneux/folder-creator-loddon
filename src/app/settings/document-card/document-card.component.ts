import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-document-card',
  templateUrl: './document-card.component.html',
  styleUrls: ['./document-card.component.scss']
})
export class DocumentCardComponent implements OnInit {

  @Input() documentName: string;
  @Input() documentVersion: string;
  @Input() reference: string;

  @Input() forUpload: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
