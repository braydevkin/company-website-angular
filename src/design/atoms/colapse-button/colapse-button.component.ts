import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-colapse-button',
  standalone: true,
  imports: [],
  templateUrl: './colapse-button.component.html',
})
export class ColapseButtonComponent {
  @Input() onAction: HTMLButtonElement | undefined;
}
