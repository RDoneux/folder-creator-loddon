import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss'],
})
export class TooltipComponent implements OnInit {
  @Input() text: string;

  @ViewChild('tooltip') tooltip: ElementRef;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    // console.log(this.tooltip.nativeElement.style = 'left: -100px');
    const size = this.tooltip.nativeElement.getBoundingClientRect();
    console.log(size.right - size.left);
  }

  printSize() {
    var size = this.tooltip.nativeElement.getBoundingClientRect();
    var offsetX = (size.right - size.left) / 2;
    var offsetY = (size.bottom - size.top) / 2;

    if (offsetY > offsetX) {
      const tempX = offsetX;
      offsetX = offsetY;
      offsetY = tempX;
    }

    if (size.left - offsetX < 0) {
      offsetX = 0;
    }

    // this.tooltip.nativeElement.style = 'left: ' + -offsetX + 'px';
    // this.tooltip.nativeElement.style = 'top: ' + size.top + 'px';

    this.tooltip.nativeElement.style.left = -offsetX + 'px';
    this.tooltip.nativeElement.style.top = size.top * 2 + 'px';
  }
}
