import { AsyncPipe, NgTemplateOutlet } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MessageServiceService } from '../../core/services/message-service.service';
import { Messages } from '../../core/enums/Messages';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMessage, faClose } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-message',
  imports: [NgTemplateOutlet, AsyncPipe, FontAwesomeModule],
  templateUrl: './message.component.html',
  styleUrl: './message.component.scss',
})
export class MessageComponent {
  readonly message = inject(MessageServiceService);
  readonly Messages = Messages;
  faMessage = faMessage;
  faClose = faClose;
}
