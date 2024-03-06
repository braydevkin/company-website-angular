import { NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-partner-card',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './partner-card.component.html',
})
export class PartnerCardComponent {
  @Input() imageSrc: string = '../../../assets/partners/partner-logo.png';
  @Input() name: string = '';
  @Input() segment: string = '';
}
