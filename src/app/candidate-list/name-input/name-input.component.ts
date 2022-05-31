import { Component, ElementRef, EventEmitter  , OnInit, Output, ViewChild } from '@angular/core';
import { Candidate } from '../candidate-list.component';

@Component({
  selector: 'app-name-input',
  templateUrl: './name-input.component.html',
  styleUrls: ['./name-input.component.scss']
})
export class NameInputComponent implements OnInit {

  @Output() emittedCandidateName = new EventEmitter<Candidate>();
  @Output() change = new EventEmitter<String>();

  @ViewChild('inputButton') input: ElementRef;
  @ViewChild('textInput') textInput: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
  }

  handleButtonClick() {
    var candidate: Candidate = {name: this.textInput.nativeElement.value}
    this.addName(candidate);
    this.textInput.nativeElement.value = "";
  }

  handleKeyPress() {
    var candidate: Candidate = {name: this.textInput.nativeElement.value}
    this.addName(candidate);
    this.textInput.nativeElement.value = "";
  }

  addName(name: Candidate) {
    this.emittedCandidateName.emit(name);
  }

  handleChange(key: KeyboardEvent) {
    if(key.code == "Enter") return;
    this.change.emit(key.key);  
  }

}
