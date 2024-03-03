import { Component, Input } from '@angular/core';
import { TitleComponent } from '../../atoms/title/title.component';
import { SubtitleComponent } from '../../atoms/subtitle/subtitle.component';
import { RoundedButtonComponent } from '../../atoms/rounded-button/rounded-button.component';
import { NgOptimizedImage } from '@angular/common';
import { ReadMoreComponent } from '../../atoms/read-more/read-more.component';

@Component({
  selector: 'app-hero-action',
  standalone: true,
  imports: [
    TitleComponent,
    SubtitleComponent,
    RoundedButtonComponent,
    ReadMoreComponent,
    NgOptimizedImage,
  ],
  templateUrl: './hero-action.component.html',
})
export class HeroActionComponent {
  @Input() actionTitle: string =
    'Redirect your traffic with our shortened links';
  @Input() actionSubtitle: string =
    'An innovative way of dealing with your shortened links, exploit the power of strategies, increase results with AB tests and scale your links quickly and safely.';
  @Input() callToReadMore: string =
    "Links in a way you've never seen before, see all our strategies...";
  @Input() actionButtonTitle: string = 'Start Now !';
  @Input() brandHeroUrl: string = '../../../assets/hero/Illustration.png';
}
