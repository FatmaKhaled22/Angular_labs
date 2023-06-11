import { Directive, ElementRef, HostListener, Input, OnChanges, SimpleChanges } from '@angular/core';


@Directive({
  selector: '[CardStyle]'
})
export class CardStyleDirective implements OnChanges{

  // property
  @Input() radius1: string = '30px';
  @Input('CardStyle') radius2: string = '10px';
  @Input() shadow: string = "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)";
   // document.getElement   .style.
  constructor(private element: ElementRef) {
    // this.element.nativeElement.style.borderRadius = '30px';
    this.element.nativeElement.style.boxShadow = `${this.shadow}`;
  }
  ngOnChanges(): void {
    this.element.nativeElement.style.borderRadius = `${this.radius2}`;
  }
 
  // method decorator
  @HostListener('mouseover') func1() {
    this.element.nativeElement.style.boxShadow = "0 4px 8px 0 rgba(0, 0, 0, 0.4), 0 6px 20px 0 rgba(0, 0, 0, 0.3)";
  }
  @HostListener('mouseout') func2() {
    this.element.nativeElement.style.boxShadow = `${this.shadow}`;
  }

}
