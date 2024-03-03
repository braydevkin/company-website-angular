import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../design/molecules/header/header.component';

@Component({
  selector: 'home-template',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './home.component.html',
})
export class HomeTemplate implements OnInit {
  constructor() {}
  ngOnInit(): void {}
}
