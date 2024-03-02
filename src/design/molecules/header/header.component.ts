import { Component } from '@angular/core';
import { RedButtonComponent } from '../../atoms/red-button/red-button.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RedButtonComponent],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  title = 'Header Title';
  redButtonTitle = 'Falar com a Via Certa';
}
