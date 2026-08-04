import { NgTemplateOutlet } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MessageServiceService } from '../../core/services/message-service.service';
import { Messages } from '../../core/enums/Messages';

@Component({
  selector: 'app-message',
  imports: [NgTemplateOutlet],
  templateUrl: './message.component.html',
  styleUrl: './message.component.scss',
})
export class MessageComponent {
  readonly message = inject(MessageServiceService);
  readonly Messages = Messages;
}
