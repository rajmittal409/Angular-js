import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDirective1]'
})
export class Directive1Directive {

  constructor(private e:ElementRef) {
    e.nativeElement.style.color="red";
    e.nativeElement.style.backgroundColor="silver";
    
   }

}
