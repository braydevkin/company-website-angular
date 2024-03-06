import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PartnerCardComponent } from '../../molecules/partner-card/partner-card.component';

@Component({
  selector: 'app-partners',
  standalone: true,
  imports: [CommonModule, PartnerCardComponent],
  templateUrl: './partners.component.html',
})
export class PartnersComponent {
  partners = [
    { name: 'Partner Name', segment: 'Any segment' },
    { name: 'Partner Name', segment: 'Any segment' },
    { name: 'Partner Name', segment: 'Any segment' },
    { name: 'Partner Name', segment: 'Any segment' },
    { name: 'Partner Name', segment: 'Any segment' },
    { name: 'Partner Name', segment: 'Any segment' },
    { name: 'Partner Name', segment: 'Any segment' },
    { name: 'Partner Name', segment: 'Any segment' },
    { name: 'Partner Name', segment: 'Any segment' },
    { name: 'Partner Name', segment: 'Any segment' },
    { name: 'Partner Name', segment: 'Any segment' },
  ];
}
