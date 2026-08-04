import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-burger',
  imports: [],
  templateUrl: './burger.component.html',
  styleUrl: './burger.component.scss',
})
export class BurgerComponent {
  @Input() isActive = false;
}
