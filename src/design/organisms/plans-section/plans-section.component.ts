import { Component } from '@angular/core';
import { TitleComponent } from '../../atoms/title/title.component';
import { SubtitleComponent } from '../../atoms/subtitle/subtitle.component';

@Component({
  selector: 'app-plans-section',
  standalone: true,
  imports: [TitleComponent, SubtitleComponent],
  templateUrl: './plans-section.component.html',
})
export class PlansSectionComponent {}
