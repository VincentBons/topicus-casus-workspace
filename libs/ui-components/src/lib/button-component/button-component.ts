import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-button',
  imports: [CommonModule],
  templateUrl: './button-component.html',
  styleUrls: ['./button-component.scss'],
})
export class ButtonComponent {
  @Input() type = 'button';
  @Input() disabled = false;
  @Input() submitFunction: () => void = () => {};

  onClick() {
    if (this.disabled || this.type === 'submit' || !this.submitFunction) {
      return;
    }
    this.submitFunction();
  }
}
