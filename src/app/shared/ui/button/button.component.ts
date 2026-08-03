import { Component, Input } from '@angular/core';
import { ɵEmptyOutletComponent } from '@angular/router';

@Component({
  selector: 'app-button',
  imports: [ɵEmptyOutletComponent],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() variant: 'white' | 'green' = 'green';
  @Input() disabled = false;
}
