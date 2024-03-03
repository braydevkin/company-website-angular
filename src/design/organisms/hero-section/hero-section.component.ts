import { Component } from '@angular/core';
import { HeroActionComponent } from '../../molecules/hero-action/hero-action.component';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [HeroActionComponent],
  templateUrl: './hero-section.component.html',
})
export class HeroSectionComponent {}
