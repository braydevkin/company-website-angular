import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../design/molecules/header/header.component';
import { HeroSectionComponent } from '../../design/organisms/hero-section/hero-section.component';
import { PlansSectionComponent } from '../../design/organisms/plans-section/plans-section.component';

@Component({
  selector: 'home-template',
  standalone: true,
  imports: [HeaderComponent, HeroSectionComponent, PlansSectionComponent],
  templateUrl: './home.component.html',
})
export class HomeTemplate implements OnInit {
  constructor() {}
  ngOnInit(): void {}
}
