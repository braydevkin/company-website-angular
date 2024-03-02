import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-red-button',
  standalone: true,
  imports: [],
  templateUrl: './red-button.component.html',
})
export class RedButtonComponent {
  @Input() title: string = '';
}
