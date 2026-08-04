import { Injectable } from '@angular/core';
import { IMessages } from '../models/interfaces/IMessages';
import { Messages } from '../enums/Messages';

@Injectable({
  providedIn: 'root',
})
export class MessageServiceService {
  messages: IMessages[] = [];
  private id = 1;

  private addMessage(type: Messages, text: string) {
    const id = this.id++;
    this.messages.unshift({
      id,
      text,
      type,
    });
    setTimeout(() => {
      this.closeMessage(id);
    }, 5000);
  }

  showWarn(text: string) {
    this.addMessage(Messages.WARN, text);
  }

  showError(text: string) {
    this.addMessage(Messages.ERROR, text);
  }

  showSuccess(text: string) {
    this.addMessage(Messages.SUCCESS, text);
  }

  showInfo(text: string) {
    this.addMessage(Messages.SUCCESS, text);
  }

  closeMessage(id: number) {
    this.messages = this.messages.filter((el) => el.id !== id);
  }
}
