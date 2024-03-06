import { Component } from '@angular/core';
import { RadioButtonOptionsComponent } from '../../atoms/radio-button-options/radio-button-options.component';

@Component({
  selector: 'app-plan-freq-currency-select',
  standalone: true,
  imports: [RadioButtonOptionsComponent],
  templateUrl: './plan-freq-currency-select.component.html',
})
export class PlanFreqCurrencySelectComponent {
  frequencies: string[] = ['Monthly', 'Yearly'];
  currencies: string[] = ['USD', 'BRL'];
}
