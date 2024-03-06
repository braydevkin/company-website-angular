import { Component } from '@angular/core';
import { TitleComponent } from '../../atoms/title/title.component';
import { SubtitleComponent } from '../../atoms/subtitle/subtitle.component';
import { PlanFreqCurrencySelectComponent } from '../../molecules/plan-freq-currency-select/plan-freq-currency-select.component';

@Component({
  selector: 'app-plans-section',
  standalone: true,
  imports: [TitleComponent, SubtitleComponent, PlanFreqCurrencySelectComponent],
  templateUrl: './plans-section.component.html',
})
export class PlansSectionComponent {}
