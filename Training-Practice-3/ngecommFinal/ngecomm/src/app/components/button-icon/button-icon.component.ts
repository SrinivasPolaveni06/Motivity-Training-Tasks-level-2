import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button-icon',
  templateUrl: './button-icon.component.html',
  styleUrls: ['./button-icon.component.scss']
})
export class ButtonIconComponent {
  @Input() icon: String = "";
  @Output() iconClicked = new EventEmitter(); // its a library
  onBtnClick() {
    this.iconClicked.emit(null)
  }
}
