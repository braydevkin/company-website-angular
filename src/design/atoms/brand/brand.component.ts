import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-brand',
  standalone: true,
  imports: [],
  templateUrl: './brand.component.html',
})
export class BrandComponent {
  @Input() title: string = '';
}
