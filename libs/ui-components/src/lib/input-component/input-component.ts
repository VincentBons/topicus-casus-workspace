import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-input',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './input-component.html',
  styleUrls: ['./input-component.scss'],
})
export class InputComponent {
  @Input() label = '';
  @Input() name = '';
  @Input() type = 'text';
  @Input() placeholder = '';
  @Input() value = '';
  @Input() required = false;
  @Input() width: 'normal' | 'wide' = 'normal';
  @Input() control!: FormControl;
  @Input() error!: string;
  @Input() showValidation = false;

  _elementId = `input-${Math.random().toString(36).substring(2, 15)}`;
}
