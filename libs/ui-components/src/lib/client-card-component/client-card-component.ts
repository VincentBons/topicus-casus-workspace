import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-client-card',
  imports: [CommonModule],
  templateUrl: './client-card-components.html',
  styleUrls: ['./client-card-components.scss'],
})
export class ClientCardComponent {
  @Input() client!: {
    id: string;
    firstNames: string;
    lastName: string;
    dateOfBirth: string;
    contact: string;
  };
  @Input() contact?: {
    id: string;
    firstNames: string;
    lastName: string;
  };
}
