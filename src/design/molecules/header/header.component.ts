import { Component, Input } from '@angular/core';
import { RedButtonComponent } from '../../atoms/red-button/red-button.component';
import { MenuItemComponent } from '../../atoms/menu-item/menu-item.component';
import { CommonModule } from '@angular/common';
import { ColapseButtonComponent } from '../../atoms/colapse-button/colapse-button.component';
import { BrandComponent } from '../../atoms/brand/brand.component';

type HeaderItem = {
  title: string;
  to: string;
};

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    ColapseButtonComponent,
    BrandComponent,
    MenuItemComponent,
  ],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  @Input() isOpen: boolean = false;
  @Input() title: string = 'Company Website';
  @Input() items: HeaderItem[] = [
    { title: 'Início', to: '/' },
    { title: 'Nossos Parceiros', to: '/partners' },
    { title: 'Via Certa Ensina', to: '/learn' },
    { title: 'Contato', to: '/contact' },
  ];

  colapse() {
    this.isOpen = !this.isOpen;
  }
}
