import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rounded-button',
  standalone: true,
  imports: [],
  templateUrl: './rounded-button.component.html',
})
export class RoundedButtonComponent {
  @Input() title: string = '';
}
