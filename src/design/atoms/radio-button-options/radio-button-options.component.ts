import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';

@Component({
  selector: 'app-radio-button-options',
  standalone: true,
  imports: [MatRadioModule, FormsModule],
  templateUrl: './radio-button-options.component.html',
})
export class RadioButtonOptionsComponent {
  selectedOption: string = '';
  @Input() options: string[] = [];
}
