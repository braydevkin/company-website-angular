import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu-item',
  standalone: true,
  templateUrl: './menu-item.component.html',
})
export class MenuItemComponent {
  @Input() title: string = '';
  @Input() to: string = '';
}
