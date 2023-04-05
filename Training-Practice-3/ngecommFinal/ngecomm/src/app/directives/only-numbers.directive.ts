import { Directive, ElementRef, HostListener } from '@angular/core';
import { KeyCodes } from '../enums/key-codes';

@Directive({
  selector: '[appOnlyNumbers]'
})
export class OnlyNumbersDirective {

  el!: ElementRef;
  @HostListener('keydown', ['$event']) onKeyDown(event: any) {
    const enterdkey = event.which || event.keyCode;
    console.log(enterdkey)
    // const allowedKeys = [8, 37, 46, 39]

    // if (allowedKeys.includes(enterdkey)) {
    //   return
    // }

    if (KeyCodes[enterdkey]) {
      return
    }


    if (enterdkey > 47 && enterdkey < 58) {
      return
    }
    event.preventDefault()


  }
  constructor(el: ElementRef) {
    this.el = el;
    // console.log(this.el.nativeElement);
    // this.el.nativeElement.classList.add('dummy-class')
  }

}
