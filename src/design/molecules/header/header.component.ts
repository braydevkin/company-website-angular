import { Component, Input } from '@angular/core';
import { RedButtonComponent } from '../../atoms/red-button/red-button.component';
import { MenuItemComponent } from '../../atoms/menu-item/menu-item.component';
import { CommonModule } from '@angular/common';

type HeaderItem = {
  title: string;
  to: string;
};

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RedButtonComponent, MenuItemComponent],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  @Input() title: string = 'Header Title';
  @Input() redButtonTitle: string = 'Falar com a Via Certa';
  @Input() items: HeaderItem[] = [
    { title: 'Início', to: '/' },
    { title: 'Nossos Parceiros', to: '/partners' },
    { title: 'Via Certa Ensina', to: '/learn' },
    { title: 'Contato', to: '/contact' },
  ];
}
