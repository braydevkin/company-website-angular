import { Component } from '@angular/core';
import { HeaderComponent } from '../../design/molecules/header/header.component';
import { HomeTemplate } from '../../templates/home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeTemplate],
  templateUrl: './home.component.html',
})
export class AppHome {}
