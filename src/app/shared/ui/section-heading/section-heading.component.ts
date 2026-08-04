import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-section-heading',
  imports: [FormsModule],
  templateUrl: './section-heading.component.html',
  styleUrl: './section-heading.component.scss',
})
export class SectionHeadingComponent {
  @Input() label = '';
  @Input() title = '';
  @Input() variant: 'center' | 'default' = 'default';
  @Input() foot: 'have' | 'none' = 'none';
}
