import { Component, inject, signal, WritableSignal } from '@angular/core';
import { SectionHeadingComponent } from '../../shared/ui/section-heading/section-heading.component';
import { ButtonComponent } from '../../shared/ui/button/button.component';
import { Messages } from '../../core/enums/Messages';
import { MessageServiceService } from '../../core/services/message-service.service';
import { IFooterForm } from '../../core/models/interfaces/IFooterForm';
import { form, FormField, required } from '@angular/forms/signals';

@Component({
  selector: 'app-footer',
  imports: [SectionHeadingComponent, ButtonComponent, FormField],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  readonly Messages = Messages;
  protected readonly message = inject(MessageServiceService);
  protected emailFooter: WritableSignal<IFooterForm> = signal({
    id: 0,
    email: '',
  });
  protected readonly footerForm = form(this.emailFooter, (validations) => {
    required(validations.email, {
      message: 'Обязательное поле',
    });
  });
}
