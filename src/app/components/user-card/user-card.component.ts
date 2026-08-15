import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IUser } from '../../core/models/interfaces/IUser';
import { UpperCasePipe } from '@angular/common';
import { PhoneFormatPipe } from '../../shared/pipes/phone-format.pipe';
import { BoldOnHoverDirective } from '../../shared/directives/bold-on-hover.directive';
import { GradientBorderDirective } from '../../shared/directives/gradient-border.directive';

@Component({
  selector: 'app-user-card',
  imports: [UpperCasePipe, PhoneFormatPipe, BoldOnHoverDirective, GradientBorderDirective],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss',
})
export class UserCardComponent {
  @Input({ required: true }) user!: IUser;
  @Output() id = new EventEmitter();

  checkId() {
    this.id.emit(this.user.id);
  }
}
