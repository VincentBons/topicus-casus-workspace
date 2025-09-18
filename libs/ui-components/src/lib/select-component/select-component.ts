import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'lib-select',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './select-component.html',
  styleUrls: ['./select-component.scss'],
})
export class SelectComponent {
  @Input() label = '';
  @Input() name = '';
  @Input() placeholder = '';
  @Input() value = '';
  @Input() required = false;
  @Input() options: Array<{ label: string; value: string }> = [];
  @Input() control!: FormControl;
  @Input() error!: string;
  @Input() showValidation = false;

  _elementId = `select-${Math.random().toString(36).substring(2, 15)}`;
}
