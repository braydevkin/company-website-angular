import { NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-brand',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './brand.component.html',
})
export class BrandComponent {
  @Input() brandLogoUrl: string = '../../../assets/brand/logo.png';
}
