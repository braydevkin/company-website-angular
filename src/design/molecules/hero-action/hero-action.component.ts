import { Component, Input } from '@angular/core';
import { TitleComponent } from '../../atoms/title/title.component';
import { SubtitleComponent } from '../../atoms/subtitle/subtitle.component';
import { RoundedButtonComponent } from '../../atoms/rounded-button/rounded-button.component';

@Component({
  selector: 'app-hero-action',
  standalone: true,
  imports: [TitleComponent, SubtitleComponent, RoundedButtonComponent],
  templateUrl: './hero-action.component.html',
})
export class HeroActionComponent {
  @Input() actionTitle: string =
    'Redirect your traffic with our shortened links';
  @Input() actionSubtitle: string =
    'The ultimate tool for efficient link management.';
  @Input() actionButtonTitle: string = 'Register';
}
