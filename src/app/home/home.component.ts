import { Component } from '@angular/core';
import { HeaderComponent } from '../../design/molecules/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './home.component.html',
})
export class AppComponent {}
